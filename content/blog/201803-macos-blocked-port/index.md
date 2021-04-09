---
author: sznowicki
comments: true
date: 2018-03-27 19:18:49+00:00
slug: permanently-blocked-port-on-macos-high-sierra
title: Permanently blocked port on Macos High Sierra
categories: [Development]
tags: [localhost, networking, node, nodejs, macos]
---

Short note with quick solution.

For some time my react app was constantly refusing to run on localhost:3000. For some time I thought that maybe there's some forgotten node process still running in the background.

After some investigation I found that something changed on MacOS High Sierra networking setup and localhost is often not resolved to 127.0.0.1.

Adding `127.0.0.0.1 localhost` into `/etc/hosts` seems like a solution for this issue.
