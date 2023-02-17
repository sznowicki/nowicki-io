---
author: sznowicki
date: 2023-02-17 19:19:36+00:00
slug: now-more-gatsby
title: No more Gatsby
layout: post
link: https://nowicki.io/no-more-gatsby
excerpt: How this blog moved from gatsby in favor of React as a template system, bundle-less nodejs and small parceljs setup.
categories: [Development]
tags: [parceljs, parcel, gatsby, react]
---

## How this blog works under the hood

This is yet another post about "how I reworked my blog stack", but I find it cool what I did and want to share some thoughts about it.

It was supposed to be a longer article about how frameworks in 2022(2023) don't really give much value to a developer, but this blog post is still in drafts, and since I don't know when I will finish it, here's a shorter version.

### No JS framework, no JS on the client

Getting out of Gatsby I wanted to do the smallest setup I can. The requirements were:

- lean MD to HTML
- no bundler for CI/CD setup (raw nodejs)
- no client side JS
- templating with React because I wanted to port gatsby templates and... I like React

### Markdown to HTML

I use [showdownjs](https://www.npmjs.com/package/showdown) at work, and since the main maintainer is back with us after fighting the pandemic in his main job (as a doctor) the choice was easy.

I did some attempts a few times with different parsers but all of them are either very modular (lots of configs required) or feel like made for something else (that one that NetlifyCMS is using).

Showdown is easy to use, you pass markdown, it gives you html. All with GitHub flavour which feels natural to me.

Even markdown headers (check md files in this blog repo) are built-in which is amazing.

The greatest package for me.

### React as a template engine without transpilation

#### No see, no cry
Now the second problem. I don't like transpiling my code. I like to know exactly what I run.

But how do I use React without transpiling?

After a quick google I found the answer. I can transpile during the runtime while importing stuff!

Well it's not really matching my criteria (still running transpiled code), but with [@swc/register](https://www.npmjs.com/package/swc-register) I can at least do it in the most seamless way.

I write some code, I register `swc` while spinning up node (`node -r @swc/register scripts/index.js`) and it does everything during the runtime.

For a server I might not pick that option, but for a CI/CD script it's the best compromise to make nodejs understand React.

### Save that html

So I got the build script that does more or less this

1. Read all folders in /blog folder
2. Get all index.md files from those folders
3. Ask showdown to give me html and meta information (slug, date, tags)
4. Put this as a prop to React component
5. Run `renderToString`
6. Put this all to .pug template (just one file!) so I don't have to deal with <head> in React
7. Save to html in folder named as the `slug` meta
8. Once all blogpost are set, get excerpts from them and do similar with the homepage.
9. Tell CloudFlare to deploy

### CSS!

I like writing SASS, so I put parceljs next to it. Parcel is nice because like showdownjs it does what I need (and more) with no or little configuration. `parcel style.scss` would install SASS (if not there), compile the file to css and save it to /dist folder.

I don't have to tell anything to this bundler, it detects stuff on its own. Which sometimes can be annoying but in most cases it just works™.

## Is it fast now?

After moving away from Gatsby to mix of Parcel, ShowdownJS and SWC + small nodejs script that orchestrates all it installs, builds and deploys on CloudFront in less than one minute.

With Gatsby it was more than 2 minutes.

Not to mention the time I spent before on trying to upgrade Gatsby (which didn't work).

## Do I recommend this way?

Yes. In that article that I may never finish I will explain why I think frameworks these days are getting irrelevant in favor of smart bundlers and native nodejs / Web API features.

I started doing similar at work where our apps and frameworks (that we make ourselves) are much more  complex. We pick dependencies that fill the gaps between what we want to do and what is available
natively in nodejs or Web API. They should do one thing, be unopinionated and enable us instead of restricting us in **how** we want to approach things.

## No more frameworks?

Of course, I'm not saying everyone should do as we do. I'm sure there are teams and setups where frameworks give something that might be most valuable: well known conventions.

And this is fine, pick the tools that suits you. Never listen blindly to people on the internet.

Try things, approaches and patterns out. Pick what you think makes sense. Never stop finding your own ways.

❤️
