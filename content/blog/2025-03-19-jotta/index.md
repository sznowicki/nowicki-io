---
author: sznowicki
date: 2025-03-19 19:19:36+00:00
slug: jottacloud-as-icloud-alternative
title: Jottacloud as the iCloud alternative
layout: post
link: https://nowicki.io/jottacloud-as-icloud-alternative
excerpt:  Almost there, almost a full, valid iCloud alternative.
categories: [iCloud, Apple, Linux, Cross-platform, Jottacloud]
tags: [iCloud, Apple, Linux, Cross-platform, Jottacloud]
---

So, I was shopping for a proper iCloud alternative and I think I found a proper gem, although with a few missing pieces.

## Apple is great, until it's not

I've been fully immersed in the Apple ecosystem for a few years now. Starting with an iPod Shuffle back in 2011 (this is still the best designed device, it still even works now!), then iPhone, then laptops, iPads and so on.

I've also managed to get my wife onboard and few years ago I was happy with everything-apple, including all our cloud needs like sharing files, photos and even using iCloud passwords before they were properly advertised with the Passwords app.

Then I installed LineageOS on my old wife's Android device and needed some cross-platform password manager. Ended up with Strongbox and KeepassXC. One piece out of iCloud.

iCloud Mail works just fine on different devices, I don't feel the need to move away. Same with Apple Music and TV.

But files, and Photos... That's a big, hard "no" from Apple.

No API, no third-party apps, no support outside the walled garden.

This was still fine as long as I only used that toy-Android-secondary-device.

Now when I get a proper [Linux desktop](/apple-studio-display-on-linux-or-how-apple-sheep-moved-to-linux) and I noticed I don't use macbook that much anymore, I started looking around what are my options.

Yes, there's rclone with iCloud drive support. That kinda works (although buggy). But, for Photos there's literally hard, strict lockdown.

## Jottacloud

I was looking or something that would work everywhere and also be somwhat compatible with our current setup, that includes Apple TV device.

Surprisingly Jottacloud ***does offer Apple TV app***. I didn't even notice this while doing the first trial until I read some mention of it in one of their support documents.

Big wow, let's go full with this solution then!

## Advantages

With my weekend trial I noticed those huge pluses for Jottacloud:

### EU company with a good vibe

Jottacloud is a Norwegian company, so we can be sure they treat their personal well (no other choice up there in the North).

Speaking to the customer service is an amazing experience. Like yes they greet you with a bot first, but telling the bot to send you to human does work and then this human actually treats you like a creature with brain.

They don't have scripted chats, it's a normal conversation like you'd talk to your friend that happens to work in that company.

They even follow up with topics that needs to be checked with the dev team after few days.

I felt well listened and understood.

### Apple TV app

Not much to say. It is there and it works more or less like the native app.

### Apps plus CLI tool

Major platform have apps with GUI. When there's no app, there's a CLI tool that seems to be build for everything that has a CPU.

I have to say this is a really smart solution. Such CLI tool can be written in lets say Golang, compiled to almost everything and then used by the GUI tools as well.

One codebase, so many customers well served.

Also the CLI tool has a nice design. It's easy to set up and then it works mostly in the background not bothering you.

```
jotta-cli login
jotta-cli sync ./jottacloud
jotta-cli observe
```

Big props to whoever designed this!

### Good documentation

Docs are well written and tell what you need to know, including options and what are the consequences (e.g. fist initial Photos upload with iCloud "storage optimisation" vs "originals on device").

### Price is an absolute banger

I didn't even notice this, but when you buy the family plan, you get 1TB PER USER, not 1TB shared. Wow.

### Setup and forget

I have it running on iPhone, iPad, Ubuntu and Android. It just works, no need to go there and fiddle with it.

## Missing stuff

I noticed only two problems, both of them are show-stoppers for us moving away from iCloud.

### No HDR support

You have your nw iPhone that makes amazing HDR photos. You take a photo, then you check it out on Photos app. You notice the colors are super bright there.

Then you check it on Jottacloud app and something is off.

Yes, Jottacloud doesn't show the originals, unless they are already on the device.

Meaning, if you use optimized iCloud storage AND use the jottacloud only for the photos, you'll alway look at JPEG instead of HEIC.

That was my first, woops, that's bad, moment.

I could live with JPEGs in the browser, that's fine and I know HEIC on web is not a thing yet.

But on native devices there must be at least some option to preview the original. Maybe not even as a default but somewhere, somehow.

I talked about it with a support and while they have good arguments why they didn't ship it like this, that doesn't change the fact that it is a major issue for me.

I also understand that it might be a very niche problem.

### No shared library

This is a big one. We use the shared library on iCloud. Apple made it pretty smart and every family member has their own photos library and there's one that's being owned by everywhere.

You can pick the photos you want to put to the "community" one, while keeping some screnshots and other irrelevant photos just for yourself.

Jottacloud has nothing that would work like this.

If we disabled iCloud completely and only rely on Jotta photos, we would stop sharing photos with each other.

I also talked about this with the support and just like with HDR they acknowledged it but nothing in the roadmap to tackle this.

Here I also understand that it's a non-trivial problem to solve for product designers.

## I stay

So in the end while I'm not successful with my plan of moving away from iCloud subscription, yet I still think Jottacloud has a great value.

Having all my files and photos available on all my devices is definitely worth the subscription price.

For now, we will keep the iCloud setup, with shared library, that is being backed up to Jottacloud on my end.

If you want to try them out, here's [the link, non-referral](https://jottacloud.com).
