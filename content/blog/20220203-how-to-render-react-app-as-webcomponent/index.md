---
author: sznowicki
comments: true
date: 2022-02-03 20:00:00+00:00
layout: post
link: https://nowicki.io/how-to-render-react-app-as-webcomponent/
slug: how-to-render-react-app-as-webcomponent
title: How to render a react app as a Web Component
excerpt: Small pattern that renders a React component as a child of a custom HTMLElement
categories: [Development]
tags: [react, webcomponents, webdev, frontend]
---

## Let's make a web component with React

WebComponents can be very useful, especially if you work in a micro frontends architecture.

Unlike `iframes`, the separation between the host scope and component scope is balanced better.

For example as a *custom HTMLElement* you can define whether you want to inherit CSS styles, you still have access to 
the global variables (useful if you component needs to manipulate some `<meta>` tags in `<head>`).

It's a well-designed part of the Web API, but somehow I hear often that it doesn't work well with React.

Well, sort of, and rather pre React v.17.

## What is a custom HTMLElement

If you know web components and use them already, you can skip this whole section and go right into [React](#react) part.

I will not explain it fully here, for actual definition please check out the [MDN HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) page.

Long story short, whenever a modern browser sees some unknown html tag (e.g. `<foo>`) it will check if there's maybe declared HTMLElement for that.

If not, it would just render is as any other non semantic DOM node (just like `<div>`). If there is something declared, which is suppose to be a class that extends `HTMLElement`,
it would instantiate that class and bind it with that new DOM node, giving it to the class so the class can do stuff with it.

This happens in the `connectedCallback`. That's the time when browser tells "hey this is your DOM node, do your thing".

And that "thing" can be anything you want.

### So why would I need that?

I usually use those in two cases:

#### Micro Frontends

Some code I write at work runs within a "micro frontend" website. Which means, I get some place on the website,
and it's my only responsibility for this part of the website.

My code would talk with the "host" website via some APIs and it would expose some APIs to others, but whatever happens in my place is only up to the code inside.

Imagine a checkout button as a closed shadow DOM web component. 

A team that's responsible for the cart page are specialised in cart page things. They don't know how the checkout works
and it's none of their business because there's a checkout team.

They know when to redirect the user where. Maybe it's a different platform? Maybe an internal checkout page, they know
and they want to only provide the Cart team the checkout button.

In this architecture, the Checkout team can prepare the Cart team a web component that would render a button and contain the logic of what happens when the button is clicked.

Both teams' code can talk to each other (e.g. via events). It's all nice and clean in terms of responsibilities.

With closed shadow DOM the Checkout team can even choose to have their own styles (handy if it's a third-party button with different design system).

For more I highly recommend starting from [micro frontends website](https://micro-frontends.org) which is a gold mine in this topic. 

#### Vanilla HTML website with just some js logic

The other case where I opt into webcomponents is a static website that doesn't use any React,
but still needs some JS logic from components library.

For example, there's a component on a documentation website that toggles code samples between languages.

The HTML looks like this:
```html
<toggle-content>
  <toogle-content-menu-item for="nodejs">NodeJS</toogle-content-menu-item>
  <toggle-content-menu-item for="golang">Golang</toggle-content-menu-item>
  <toggle-content-body type="nodejs">
    Here some nodejs snippets.
  </toggle-content-body>
  <toggle-content-body type="golang">
    Here some golang snippets.
  </toggle-content-body>
</toggle-content>
```

For a documentation website we don't want to use React to make it as light as possible. It's quite a lot of overhead 
for a simple logic that can be elegant and nicely written in vanilla JS.

In this case, there's a small ToggleContentElement class that when connected to the DOM node would:
- walk through all `<toggle-content-menu-item>` and wrap the text with `<button>` so we're sure it's accessible
- add `click` listeners to them
- hide the second `<toggle-content-body>` and maybe apply `aria-hidden` attributes
- toggle the content when button is clicked

Super easy to write, the one who implements the website doesn't need to know any more than this html snippet above.

## React

And then React comes into place. 

Either when your component's logic goes into higher levels, or when you just want to use that cool library the other team did, and it's in react,
or you just find React makes you write faster, all those are good reasons to spare this few KBs and introduce React into your component.

Now the pattern:

```jsx
/**
 * This is the function that orchestrates all of this.
 * Could be in your library as ready to use helper.
 * @param {string} name as in `customElements.define`
 * @param {JSX} Component React component as in `render` from react-dom.
 * @param {string} rootStyles - Styles for React root.
 */
const renderReactAsCustomHTMLElement = (
  name,
  Component,
  mode = 'closed',
  rootStyles = 'width: 100%, float: left',
) => {
  class CustomHtmlElementMadeAdHoc extends HTMLElement {
    connectedCallback() {
      const root = document.createElement('div');
      // You might want to start with some root element styles that
      // kick in before React app even inits. 
      // You probably bundle your styles with your react app so it may take a while.
      root.style = rootStyles;
      if (mode === 'closed') {
        this.attachShadow({ mode }).appendChild(root);
      } else {
        this.appendChild(root);
      }

      render(<Component />, root)
    }
  }
  
  // We don't want to throw here, so let's check if we can even register.
  const browserSupport = customElements && customElements.get;
  
  if (!browserSupport) {
    // No support, let's forget it.
    return;
  }

  const alreadyDeclared = !!(customElements.get(name));
  if (alreadyDeclared) {
    // It's already declared.
    // This should not really happen in your production code, but it happens
    // when using bundlers with hot module reload.
    return;
  }
  
  // Now, nothing can stop us:
  customElements.define(name, CustomHtmlElementMadeAdHoc);
}
```

## Bundler traps

Now when you have a good way to render React within a web component you start your work just to discover that
when you `import 'some-css.css'` with a tool like Parcel, it adds the `<link>` element outside your web component.

Which, if you're running it in *closed shadow* mode, makes all the style not being applied to the DOM nodes you render.

For [Parcel](https://parceljs.org/languages/css/) the solution is super easy: just import them as `url` or `bundle-inline` and render like this:

```jsx
import cssInline from 'bundle-text:./some-css.css';
import cssAsHref from 'url:./some-other.css';

const MyApp = () => (
  <>
    <style>{cssInline}</style>
    <link rel="stylesheet" href={cssAsHref} />
    <p>My awesome content</p>  
  </>
)
```

## Last comments

I work with web components more than a year. First it was only for that static website that we didn't want to use React.

Then it micro frontends came to us because it's a good way for multiple teams to provide their services within a same website.
Not the most efficient in terms of website performance or bundle size, but very efficient in terms of "we can work on our thing and you don't need to know what we do".

Which can be a godsend in big organisations. 

In all cases I enjoyed writing native JS a lot. To the level that I choose to put more and more logic
in our Design library to web components.

Now more and more React components are merely just wrappers and html builders for web components.

But it only applies to design components. Stupid components that need some logic, but it's only a
logic between component and a user.

When the's some business logic, fetching some data from servers, maintaining app state,
SPA routing, then a combo of React and Redux is still my tool of choice.

## Now make your own custom HTMLElement, it's fun!

I hope you enjoyed this blog post. Whether you use React or now, try out making your own custom HTMLElement!
