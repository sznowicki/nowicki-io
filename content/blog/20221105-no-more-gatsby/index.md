---
author: sznowicki
date: 2022-11-17 16:10:00+00:00
slug: no-more-frameworks-more-bundlers
title: You might not need a framework
layout: post
link: https://nowicki.io/you-might-not-need-a-framework
excerpt: Frameworks don't give much these days. Use libraries, avoid frameworks. Even in big corp.
categories: [Development]
tags: [bundler, parcel, markdown, webdev]
---

This might sound like yet another "how I moved my blog to X", so before you stop reading, here are
the main thoughts and thesis you find in this article:

1. Frameworks in 2022 don't give much except conventions.
2. In some cases it's better to write framework-less.
3. Modern bundlers solve some problems that were in frameworks domain.

## Frameworks
### What they give

When I started my career in web development I knew little to nothing. It was around 2010, time full of flame wars between WordPress, Joomla and Drupal fans.

Experienced PHP developers would pick between Zend, CodeIgniter (❤️) and Symfony.

Inexperienced like me, would spin up WordPress on [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) stack,
and hack it around with custom fields or plugins to make that [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
interface working so the marketing manager who ordered that is happy.

All of this because threats were everywhere, how to avoid SQL-injection? How to store passwords?

Back then, those solved problems now, were vaguely explained with many opinions circulating around.

Going with any established framework was a safe bet.

## JS frameworks in 2022

Then Single Page Applications appeared and everything started to change. PHP was not that
cool anymore (was it ever cool?), so with NodeJS on the backend it was a no-brainer: we go
full javascript, both ends.

If I remember correctly, SPA was first introduced in Angular, then got some traction, but
in every case it was a thing that framework gives you. Everything was opinionated. Until React.

React is simple, stupid and limited to "do one thing but do it well". It is a library, library that
manages virtual DOM, so DOM node mutations are easy, declarative and fun to work.

React is unopinionated and soon a whole ecosystem of libraries appeared, like react-router, redux and bundlers.

React is useless without bundlers. Bundlers transpile JSX to native javascript, and do
some more, like assemble entire website based on some templating system (try [Parcel!](https://parceljs.org).

We still have frameworks that put some things together, sometimes including a bundler,
and offer it as a fully featured product, a website builder of some kind.

But do we still need them in 2022?

## What frameworks do these days?

What do they offer now, that we can't have without them? With recent NextJS iteration that introduces
Server Components one might say that this is what they do. Like AstroJS - they figure out what should
run on the server and what needs some sort of client side runtime.

This however, can, and I'm sure soon will be handled by bundlers as well. In the end it's part of the bundler
job to figure exactly those things out.

So what we get from Frameworks these days?

## Conventions

My day work is in a big corporate environment. Big corporates like doing stuff in
a standardized way, ideally a way that involves some third-party companies that
promise to take some responsibilities on them.

Frameworks give conventions. Conventions mean: standards. Standards mean: if that nice person quits,
I can still hire another one and they won't sit confused in the first weeks trying to decrypt what
cool ideas had that nice dude before me.

Frameworks take away some freedom in exchange for a promise to be stable for a longer time.

Which is good, if you don't need freedom.

## Custom stuff that your PO will eventually ask for

My good friend said once

> Frameworks are great until you start fighting with it. It will happen sooner or later, if soon, change framework or write your own.

It means, that at some point, you will hit a wall. Something that a framework don't offer.
Maybe worse, something that framework maintainers are not even interested implementing or having in the code at all due to raised complexity.

If this is going to happen, how to marry those two concepts: something rather standard, but also not taking away all the freedoms?

## Conventions, code style and stupid frameworks

With the assumptions that frameworks these days don't really give much we can work in a following setup (which happen to be exact setup we have at my daily job):

- Common code style.
- Organisation wide documented conventions
- Small and stupid frameworks

### Code style

This is a no-brainer. Having same or very similar code style in an organisation is a must-have.

It's nice to give teams freedom to introduce exceptions in their projects. Some rules in some projects just don't work well.

### Organisation wide documented conventions

Common stuff should be done in common way. They goal is that any web developer can hop into any team and more or less know where to find things, how state management works, how to make API calls and so on.

It doesn't have to be exactly the same in every team, but similar.

For example in our teams we agreed to use Redux, keep all API calls in /api folders, use SCSS and Parcel and call `yarn dev` to spin up local dev.

Just with these few rules I feel like at home when I see project that I've never seen before.

Just like if we would use same framework.

### Small and stupid frameworks

Of course, nobody writes NodeJS servers without express or similar. This is a good example of small and stupid.

It doesn't try to be something more than simple server framework. It's elastic, well known and super stable.

Even if it would go out of the market there are drop-in replacements available, so also not a big deal.


