---
author: sznowicki
comments: true
date: 2020-09-07 20:15:54+00:00
slug: macbook-pro-16-64g-i9-vs-16g-i7-for-heavy-webdev
title: MacBook Pro 16" - 64G i9 vs 16G i7 for heavy webdev
excerpt: Hands-on comparison between MBP 16" - the base and top models. How they perform in programming activities? Is 16GB RAM enough? 
categories: [Hardware]
tags: [MacBook, MBP 16]
---

## You might not need 32GB for heavy webdev or even Xcode. MBP16"

I'm writing this post because I read a lot of other posts on reddit where people wondering if they should get the extra RAM for development and answers were mostly based on guesses. I was especially interested in this because I'm using already MBP 16" i9 with 64G RAM as my primary laptop.

However, my company begins castrating it to fit to the enterprise (no iCloud, private work not encouraged, VPN always on, ban on plugging any printers in). Therefore I was kind of forced to get my own laptop for my side projects. And choosing one was absolutely not an easy task.

I was considering MBP 13" or even Air, but lack of discrete GPU was a show stopper as I'm also used to do some casual gaming on Windows via Bootcamp. GTA 5 with this SSD and GPU is too sweet.

## Memory

When looking at memory usage of that i9 monster, I was thinking that I absolutely need 32GB RAM at minimum. Why?

Well, even on idle, right after booting I had 20GB memory already in use. With couple of IntelliJ Ultimate projects open, docker-compose setups with node and databases, Slack and whatnot it was getting up to 30GB with no problem.

I did know that most of those are "cached files" and Unix systems are hungry on RAM (when available), but what I didn't know is whether my workflow will be impacted if I only have 16GB on board.

I took the chance and I bought the base model: MBP 16", Radeon 5300M, 16GB RAM (and 526 SSD).

## Results

I feel no difference.

When the Mac is idling after bootstrap it takes around 8GB or RAM. Once I open two IntelliJ projects, docker is up (2GB RAM limit) with nodejs server and mysql, one more process for parceljs bundler and Chrome, RAM usage grows to 12GB.

When I work on my iOS app (Xcode + simulator), RAM is about 10GB (project is quite small tho).

The cache file is always around 3,2G (opposed to 12G on the 64GB model).

One might ask, if the cache file is lower, do you notice any slow downs or unresponsiveness?

Answer: I don't.

## Recommendations

Now, if you have spare money, I'd recommend going with i9 and as much RAM as you can. This will definitely help in a long run and having little faster GPU is also not a bad thing.

If your budget is tight though, don't be afraid of going with the low end model. This low-end is pretty damn high and as you see from my comparison, it will probably not impact your development in a meaningful way.

Do you work with Android development - forget what I wrote here. I didn't test it but my friend who's an Android developer notices slow downs with 16GB RAM on MBP 15" 2017. It could be because Android SDK and simulators and way far from being optimized, or his projects might be just way too big for 16GB RAM (it is big, gradle takes 20 minutes) - one way or another, I did hear complains from him.

## One last thing

I found one thing that's better on a lower model. Temperature. With the i7 CPU model and Radeon 5300M (which is usually active on my setup as I use second 4K monitor), fans are less often go higher than 2500RPM.

When I work on the monster, 2500RPM is pretty usual, and often goes much higher. Maybe it's because I do slightly different things at work (more extras: Slack, more IntelliJ projects opened, more docker containers) so please treat it with a grain of salt.

## Ask me anything

If you have any questions, want me to do some quick comparisons on both machines, feel free to comment. I'll try to help you. Unless you'd ask me to do things that take longer than 15 minutes ;)
