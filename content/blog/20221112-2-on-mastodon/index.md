---
author: sznowicki
date: 2022-11-12 18:43:36+00:00
slug: on-mastodon
title: On Mastodon
layout: post
link: https://nowicki.io/on-mastodon/
excerpt: My life on Mastodon with a private instance
categories: [SocialMedia]
tags: [Mastodon, SocialMedia, Fediverse]
---

In a [previous post about Twitter migration](/twitter-migration) I explained why I’m trying to stop being active there and what brings me to Mastodon.

Here I’ll share my thoughts and experiences of my first weeks with [the Federation](https://joinmastodon.org), big and small servers, supporting maintainers and running my own, single account instance.

## Instances
Unlike Twitter, Facebook and other big tech products, Mastodon is truly decentralised.

Decentralisation introduces some challenges, but seems to be a really smart idea to solve moderation problems that Twitter, and any other centralised media would never handle well.

When there are many servers, many groups of people, who can decide what content they want to consume and what not, this makes it closer to real human relations.

In real life humans choose to interact or [deny any interaction with other humans](https://en.wikipedia.org/wiki/Ostracism). Be it group of friends, organisations or pub - we (as a collective(s)) decide how we shape our social interactions.

Mastodon users do the same. Instances (collectives) can block entire instances, specific users or choose to join smaller ones where they feel more familiar.

Some instances are wild and awful, those are often blocked on an instance level - no one sees their posts, instance refuse to „talk” to them.

In my opinion it’s much better design than relying on group of paid moderators, making arbitrary decisions, or worse, decisions that they have [no real competences](https://www.bbc.com/news/technology-55657417) to make.

In the decentralised world, a ban has much less impact on a single user. If it has a bigger impact, it means many more instances followed the initial ban, meaning it has much better collective legitimacy. Yet, affected user (or group) is still able to interact with the world, can keep their data and if the violation breaks any laws, the law enforcement would act. Meaning the competences stay in right places.

_We don’t want to see you, we might report you to cops, but feel free to do your stuff elsewhere and defend your acts in front of a judge._

Just like in real life. If you go inside some pub and start shouting nazi slurs, the pub owner has all the right to tell you to leave. Then you can continue shouting outside until cops arrive and explain to you what laws you break.

## Join anywhere, be everywhere
[Mastodon’s creator and main maintainer](https://mastodon.online/@Gargron@mastodon.social) often repeats that it doesn't matter what instance you join, you have access to all federation.

Technically it is true, however choosing a bigger instance rather than small one affects how much content you can find.

I recently learned there’s no single search index, nor instances have access to other instances search indexes.

They know what they know, and they get that knowledge based on people that follow people from other instances.

This is not super clear when using big instance like mastodon.social but it’s getting super obvious once being on a small one, like a single user one.

Following hashtags there for me, it’s kinda useless.

## Big or small?
If you want to have access to rather bigger portion of Mastodon federation content, no plans to have bigger audiences (like more than 1000 followers), and just want to enjoy your stay, I’d definitely suggest going with some bigger instance, with lots of people, that is as broad and mainstream as possible.

For people who have some „reason” to be there, like political activists, tech writers, and everyone who plans posting and consuming some specific categories of content - choose dedicated instance (e.g. [front-end.social](https://front-end.social/about) or [fosstodon.org](https://fosstodon.org/about)).

Being there, among people with similar „reasons”, will make your content discoverability a _no-brainer_ - just open local feed and you’re done.

If you’re outside of those interest bubbles, the instance you’re in, needs to know about that bubble, and start receiving _some_ content from it. It will never have all of it, since it would be super expensive to receive all the content entire federation produces, just in case someone wants to see it.

Remember: „global feed” is not truly global, you’re always only scratching the surface.

## Private instance
If you run some organisation or brand profile, you __should probably run your own instance__.

Same if you are privacy, „host your own stuff”, „own your data” person, or you just like running stuff on your own like me.

For personal instances there are some benefits or running the instance, like:

- You have full control over your internet persona.
- You are verified by definition, @media@brand.com is obvious, @brand@some-mastodon.server is not.
- You have full control what you post, what you ban, what your social media experience is like.

For accounts with big audience there's one more thing.

There are real concerns that your position and number of followers can be [too expensive for any independent instance](https://ar.al/2022/11/09/is-the-fediverse-about-to-get-fryed-or-why-every-toot-is-also-a-potential-denial-of-service-attack/).

If your brand plans to grow beyond 1000 followers, you might cause a lot of trouble to the instance maintainers. Either plan ahead and do some monetary agreement with them, or get your PR agency run your brand instance and pay for yourself.

### Own instance - install, run, have fun
Spinning out an instance is easier than I thought.

#### Installing
I tried some tutorial on installing Mastodon with a `docker-compose` setup, but my compose file got so convoluted that I decided to just go with [official documentation](https://docs.joinmastodon.org/admin/prerequisites/) (with some small adjustments) and install it on bare Ubuntu 22.04, running on _Hetzner Cloud_ VPS.

With this [great article](https://jacobian.org/til/my-mastodon-instance/) I figured how to configure my instance with different [WEB_DOMAIN](https://docs.joinmastodon.org/admin/config/#web-domain).

This makes my mastodon instance running on [social.nowicki.io](https://social.nowicki.io) domain, but my handle shows my blog domain: `@hey@nowicki.io`. If you remove the first `@`, you also get my default email address. Perfect!

All went pretty smooth and shortly after, I migrated my initial account from _mastodon.social_ to my own instance.

Worth noting: migration doesn’t copy any of your historical toots. You’re starting new, only follows are moved over. Once you deactivate your account on the old instance, you’d also lose access to your previous toots and feed. You can still download a copy of all your data in the export section of account settings.

Then I had some problems with CloudFlare that can’t run their scripts due to security headers, and some issues with compiling assets, but reading possible `rake` tasks (uff, thank god I used to run a Redmine instance in the past!) and running some of them helped.

So far it’s all running very smooth, much faster than any other instance I used, and it gives me tons of pleasure to have that private space with full control on my end.

## Money, money, money
Let’s talk about money. Software development costs money. Servers cost money (and planet), moderation, shaping culture, it all costs money.

Doesn’t matter if you’re representing an organisation or private person - you use it, you should pay for it.

On Twitter people pay by giving up some rights to their content, to their personas. This gets converted to real money that other pay to reach access to your eyes and ears (and sometimes analyse your behaviour for good or evil reason).

Here you need to pay on your own.

Here, you really should pay.

You can make your own price. Let it be 1€ a month, but please, do it. Either spend it on an instance maintainer you know, [Mastodon Open Collective](https://opencollective.com/mastodon) or anyone else you want to tell „thank you”.

There’s no one else to sponsor this network except us.

Plus, imagine Mr. Rich face when Mastodon network gross income would exceed the Birdsite at some point in time.

That would be amazing.
