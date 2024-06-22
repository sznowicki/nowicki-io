---
author: sznowicki
date: 2024-06-22 18:43:36+00:00
slug: masto-kukei-eu-real-time-cross-instance-search
title: Cross instance search for Mastodon
layout: post
link: https://nowicki.io/masto-kukei-eu-real-time-cross-instance-search
excerpt: Lets try fixing Mastodon search
categories: [Hacking, Development]
tags: [Development, kukei]
---

## Search on Mastodon

Short note.

I noticed that one thing I truly miss from Twitter is real-time search.

Whenever something interesting happens in the world, like some breaking news, or Apple keynotes I miss some
real time feed of opinions and takes from strangers in the internet.

There's some Search functionality on Mastodon but with current federation model it's poor and never provides me good results.

So, when I need something, I make it.

Let me introduce you to [masto.kukei.eu](https://masto.kukei.eu).

## How it works

In short: it listens to public local timelines of a number of bigger and smaller Mastodon instances. Then it indexes the toots from accounts that did not opt-out from search indexes.

As long as those toots are in mongodb, you can query them. They are not long there, due to costs and also the Mastodon "vibe"

## Will the vibe kill it?

I saw some previous attempts on various Mastodon ecosystem apps and some of them ended up badly, including some angry mob attacking their authors.

I had this all in mind and since it is truly "real-time" search, as I delete old posts
(atm of writing I keep 4 hours of history) and I keep only toots that are indexable according to their
authors settings I hope there will be no outrage in the Mastodon community.

## Is it any cool?

Yeah, I use it from time to time and already discovered some cool accounts on some instances that federate poorly with mine.

## Was it much work?

It was a fork of kukei.eu. Removing code, adding some code. Two hours and it was MVP live.

## Future?

Donno, so far just for fun.

