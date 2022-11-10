---
author: sznowicki
date: 2022-11-05 16:10:00+00:00
slug: no-more-frameworks-more-bundlers
title: You might not need a framework
layout: post
link: https://nowicki.io/you-might-not-need-a-framework
excerpt: Frameworks don't give much these days. Use libraries, avoid frameworks. Even in big corp.
categories: [Development]
tags: [bundler, parcel, markdown, webdev]
---

This might sound like yet another "how I moved my blog to X" or "do not use Y", but well, why not?

## Frameworks

When I started my career in web development I knew little to nothing. It was around 2010,
so time with wars between Wordpress, Joomla and Drupal. Experience PHP developers would
pick between Zend, CodeIgniter (my former love) and Symfony.

They offered something that people with less experience would avoid doing on their own:
MVC patterns (conventions), authentication (security) and performance (best practices).

With PHP in those days and lack of solid libraries that do one thing and do it well,
it was quite a big risk to do things different, especially if one weren't very experienced.

And back then, everyone felt inexperienced since whole web industry was kinda chaotic and
young. Compared to 2022.

## JS frameworks in 2022

Then Single Page Applications appeared and everything started to change. PHP was not that
cool anymore (was it ever cool?), with nodejs on the backend it was a no-brainer: we go
full javascript, both ends.

If I remember correctly, SPA was first introduced in Angular, then got some traction, but
in every case it was a thing that framework gives you. Everything was opinionated. Until React.

React was simple, stupid and limited to "do one thing but do it well". It is a library, library that
manages virtual DOM so DOM node mutations are easy, declarative and fun to work.

React is unopinionated, so around it appeared a whole ecosystem of libraries, like react-router, redux and well, bundlers.

React is useless without bundlers. Bundlers transpile JSX to native javascript, and do
some more, like assamble entire website based on some templating system.

We still have frameworks that put some things together, sometimes including a bundler,
and offer it as a fully featured product, a website builder of some kind.

But do we still need them in 2022?

## What frameworks do these days?

What do they offer now, that we can't have without them? Why



My day work is in a big corporate environment. Big corporates like doing stuff in
a standardized way, ideally a way that involves some third-party companies that
promise to take some responsibilities on them. For money.

Developers don't like when their responsibilities are taken away so if they can they
would rather use something they like, that is open source, with loose license while still
being standard, so it's easy to sell.

## Why not custom?

Sell? Isn't the developer the one to decide what they will use?

Sure, if you work for a small company, that's probably the case. You have some project
to make, you choose tools you want to use, alone or with your team, and ship that thing
as soon as you're done and your stakeholders are happy with the result.

In a big organisation this is usually not how it works. In big organisations people
come and go while things they did stay long past the original author.

Hence, the need to sell your decisions to whoever is going to approve your work.

Telling this _whoever_ that you're going to be
