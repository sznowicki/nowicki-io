---
author: sznowicki
date: 2018-10-16 19:17:33+00:00
title: Pure CSS dynamic multiline paragraph placeholder
slug: pure-css-dynamic-multiline-paragraph-placeholder
categories: [Development, Frontend]
tags: [css, html, js]
---

Whoa! Long post title for a long story about:

* how to get a container height of_ exact n line-heights (tldr; use display:grid with grid-template-rows)_
* how to make use of it by creating a cool **dynamic paragraph placeholder** with quite elegant CSS an HTML


## How did this start?

I was assigned to a task that required placeholders for image and number of lines of text below.

The number of lines can vary but is constant for each of the code execution.

To make it as easy as possible, it's a no-brainer. Just a few lines of js which would create fake lines with dummy content, make it transparent and put some gray background. Done.

Since I don't like doing things in js if I know there might be a pure CSS way, I started to think if it's even possible.

Thanks to new CSS standards which are quite powerful, it is. Here's the short explanation.

## Line-height unit/value? Doesn't exists

First must-have for the placeholder is to make the empty container to be the **exact same height as filled one**, so we avoid jumping of the UI which is never a good idea.

To meet this requirement, we need to know how many lines of text we expect.

For this scenario, we assume that's a given value. For most use cases, like product cards, excerpts, user infoboxes, it's usually defined by the design.

For others, it would be still given, since for a long text we would rather want to show just two or three lines of placeholder. For those cases, the content is usually in some main container, so jumping would be avoided by its nature.

### But how do I make the container height exactly the same as it would have real content?

There are two simple ways of sizing the container which yet doesn't have the real content.

#### Render a dummy, transparent content

By rendering a dummy, transparent content you have **100% guarantee** that the browser would render it in the same way as it would be a real content.

A problem with that approach is that the content might be accessed by the screen readers _(aria-hidden_ is the solution)_._ But, additionally, you need to build the HTML and render it, then destroy this DOM node and create a new one when the real content is there. Not the biggest performance issue, but also not something you really want to do.

#### Leave the container empty, render the same size as before pseudo-element

You can also leave the container empty and render exact same and empty container as a  _before_ pseudo-element.

First intuitive thought would be to use some relative units like _em, _or _ex_.

This approach won't work since there is no such unit in CSS. All the relative units are either related to:

* container (%)
* viewport _(vh, vw)_
* or font (_em, rem, ex, ch..._)

**There is no unit that would strictly relate to line-height**, like _1lh, or _1cap_._

But there is a trick that covers this particular case: **grid ****fraction.**

#### 1 row fraction happens to have a default height same a line-height

When defining a grid you can tell how many grid rows you want to "prepare" and those are rendered even if there is no related content.

So, usual HTML grid definition looks like this:

```html
<style>
    .grid {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
    }
</style>
<div class="grid">
    <div class="row"></div>
    <div class="row"></div>
</div>
```

To prepare an empty container that has the same size as it would contain three lines of text the HTML looks like this:
```html
<style>
    .content.content--placeholder:before {
        content: "\a0";
        display: grid;
        grid-template-rows: repeat(var(--expected-lines), 1fr);
    }
</style>
<div class="content content--placeholder" style="--expected-lines: 3"></div>
```

The browser renders an empty container, with a _:before_ pseudo-element. The pseudo-element renders one line of text, a non breaking space which is invisible (**both for visual and screen readers**) but makes the line actually render.

Additionally, the content is a grid with a number of rows which is passed as a CSS variable given from the HTML style attribute.

With only this code, the browser renders the container with the exact same size as it would render three lines of real text.

## Time for a CSS only placeholder

Rendering a placeholder in CSS at this point is just a pure entertainment. By having a possibility of rendering gradients it's quite easy to generate a few grey lines.

```html
<style>
    .content.content--placeholder {
        content: "\a0";
        display: grid;
        grid-template-rows: repeat(var(--expected-lines), 1fr);
        background: linear-gradient(to bottom, rgba(197,197,197,0) 0%,rgba(197,197,197,0) 18%,rgba(197,197,197,0) 19%,rgba(197,197,197,0.5) 20%,rgba(197,197,197,0.5) 50%,rgba(197,197,197,0.5) 80%,rgba(197,197,197,0.5) 81%,rgba(197,197,197,0) 82%,rgba(197,197,197,0) 100%) repeat;
        background-size: 100% calc(100% / var(--expected-lines))
    }
</style>
<div class="content content--placeholder" style="--expected-lines: 3"></div>
```


The background is a linear gradient created with [ColorZilla](http://www.colorzilla.com/gradient-editor/) generator. The size of the background is 100% wide and height is a result of dividing 100% by the number of lines we want to render.


## Result

Now, the only job for javascript is to define how many lines the placeholder should show by manipulating the _CSS variable_. Then, when the content is ready to be shown, to render the content and remove the class which triggers the _:before_ element.

You can find a working demo on the [GitHub page](https://sznowicki.github.io/dynamic-placeholder-example/) ([source code](https://github.com/sznowicki/dynamic-placeholder-example)).
