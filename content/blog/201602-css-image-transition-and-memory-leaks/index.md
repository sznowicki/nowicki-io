---
author: sznowicki
date: 2016-02-11 12:38:36+00:00
slug: css-image-transition-and-memory-leaks
title: CSS image transition and memory leaks
excerpt: Story about really hard to trace memory leak that happened "sometimes"
categories: [Development]
tags: [css, image, memory leaks, spa, single view app, uiwebkit]
---

**CSS transitions** are features we all love and admire. They allow us to communicate with browser rendering engine and make cool things we were never able to do so fast and easy.

We also assume that we just have to use CSS as an API and don't really need to care about **memory management**. Everything should be handled by the browser, we just say what we want from the engine.

However, there are some things we should always have in mind to make the UI smooth and also nice to watch.

One of the "things" is the magic _translate3d(0,0,0)_ hack which forced the browser to use GPU (if available) for rendering the element with this property applied.

It is also possible to make everything completely wrong if we don't know what is really happening under the hood (or how specific engine handle specific transitions).

## IMG causes memory leak

For a regular job I work with **webviews**. We are focused o creating cool e-commerce apps for merchants around the world. Recently we experiment with single view approach hybrid apps. Results are pretty good, we noticed huge speed improvement, however developing an app in single view approach also opened our eyes on things we didn't consider before.

One of the issues was memory management.

Single view application loads every page in one single webview (or browser tab if it runs inside browser). It means there's need to really take care about memory leaks. It's more important to manage event listeners, object destructions and rendering process. What is flushed from memory automatically in multiview app when page is removed from stack, may stay forever in single view one.

After some tests we found out that app takes far too much memory after some time of usage and is eventually killed by jetsam (ios memory watchdog). We didn't have huge DOM (we did test it though and memory management works awesome for 600 tested Framework7 pages in DOM).

The reason behind this was jpeg rendering layers which were never flushed.

**It seems like in iOS 9, when *opacity* is applied directly to an image, another GPU layer is created to handle transitions, which is also never released. Even if the image is removed from DOM.**

Fix for this issue is pretty simple (apply opacity transitions to image parent, not image itself), however research on this took some hours.

Lesson learned. Do not apply opacity to an image itself.
