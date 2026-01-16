---
author: sznowicki
date: 2026-01-16 19:19:36+00:00
slug: agentslug-federated-uptime-check
title: Back to the AgentSlug
layout: post
link: https://nowicki.io/agentslug-federated-uptime-check
excerpt: Idea - self hosted, federated (yes), uptime checker
categories: [tech, selfhosting, foss]
tags: []
---

## Idea

There are many uptime checkers in the wild. If they are good, they need to be commercial, because uptime checks cost real money.

If you want to have a good quality, you need to ping your websites or app from many nodes, spreaded around the world. Otherwise you risking many false negatives, testing your own k8s cluster with internal network.

What if we follow the spirit of the Fediverse in that tech too?

### AgentSlug.com FOSS edition

The idea is this:

There is a FOSS server code that can be self-hosted by anyone.

If you want, you can spin up the server and test your stuff on your own, or you can opt-in to participate in the network.

### Network

#### Hub
If you opt-in, you need to choose a Hub.

A hub is a server that opts-in to be a hub. A register for all Request-For-Ping. Main hub will be hosted on agentslug.com domain, but as any other hub, will provide information about other, discovered hubs.

Hub has /api/request-for-ping endpoint.

Any client in the network CAN POST there it's request. Eg. {url: https://example.com}

Any client in the network SHOULD periodically GET /api/request-for-ping.

A hub receives GET requests and assignes clients with tasks, reserving them.

A receiving client, performs an uptime-check, and sends a results of it back to the hub so it can pass it to the requesting server, dropping the task from a queue.

#### Client

Client is a network participant that may or may not act as a hub.

When it's not a hub, the only role for the client in the network is to participate in the tasks processing.

Hubs register tasks ratio for each domains. If a domain is known to have a reputation of asking for uptime checks but not performing them to others, it may be de-prioritized in the queue

## What problem it solves

Commercial uptime checkers are checking from networks that are usually performing super well in the network. Big hosting providers like AWS and smaller ones, all are in some data centers.

That makes those tests only partially valid for markers like time to response, time to first byte and so on.

With a federated network, aimed at self-hosters, we should get a fair chunk of residential IPs and all sort of downtime signals due to weird reasons like local bans.

## Unknowns

There are some problems that still need a better thought process.

Like how do we ensure, bad actors don't exploit the network for malicious intents? I can imagine someone registering a client, pointing to some poor website and asking 100s of nodes to ping it.

I'm sure problems like this can be mitgated in a smart way. If we can have a federated social media, we should be able to do uptime checks in a similar way.
