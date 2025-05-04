---
author: sznowicki
date: 2025-05-04 19:19:36+00:00
slug: matrix-bridges-or-cross-platform-sms-sync
title: Matrix bridges
layout: post
link: https://nowicki.io/matrix-bridges-or-cross-platform-sms-sync
excerpt: How to get all your chat apps in one, including SMS.
categories: [Apple, Linux, Cross-platform, Android]
tags: [Apple, Linux, Cross-platform, Android, Matrix]
---

## How to sync your SMS across Android, iOS and Linux

Since I'm using Linux and Android more and more these days, I started to eliminate all Apple-only tech one after another.

Now it's time for SMS/iMessage.

How can we have a cross-platform, sync-everywhere solution for SMS?

Well, here's the solution: a Matrix bridge.

## Matrix

For some time, I have been moving more and more of my setup to be cross-platform and self-hosted if possible.

Messaging was the first step, with Matrix.

I self-host a Matrix server for my family chats. Then I started setting up bridges for Meta's Messenger app and Signal.

This way, I'm totally independent of whether a platform supports Linux or not. Matrix supports it all, and I now have all important chats in one app.

### Bridges

How bridges work is very simple. On my Matrix server, there's another process that acts as a "companion" app for Signal and a normal web client for Messenger.

The bridge works as a "puppet", sending messages from an external system to Matrix and vice versa.

This is not ideal but does the job just fine.

## I don't have iPhone SMS on my Linux

And it's annoying.

After some time considering it just an annoyance, with the internet (including LLMs) giving me no solution, it enlightened me close to midnight.

Why don't I move my SMS receiver SIM card (I have multi-SIM from Telekom, one for my iPhone, the second for my Android phone) to the Android one, use the Google Messages app and then just bridge it?

And it works!

After setting everything up, I now have SMS across all my devices, in the Element app.

Yes, I lose iMessage, but to be honest, I don't use it anymore anyway, since the only people who were using it with me were my son and my wife, and we moved to Matrix anyway.

## Links

- [Matrix](https://matrix.org/)
- [Mautrix-gmessages](https://github.com/mautrix/gmessages)
- [Mautrix-gmessages setup with Docker](https://docs.mau.fi/bridges/general/docker-setup.html?bridge=gmessages)
