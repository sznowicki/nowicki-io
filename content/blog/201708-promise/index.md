---
author: sznowicki
comments: true
date: 2017-08-09 12:50:34+00:00
slug: promise-is-not-just-simplified-callbacks-pattern
title: Promise is not just simplified callbacks pattern
categories: [Development]
tags: [es6, javascript, promise]
---

Since ES6 popularity grows, Javascript _Promises_ use is getting more and more attention.

Many forget that _Promise_ is not just a nice way to simplify callbacks it's much more - **keeping the resolution state as long as the _Promise_ is kept in a memory**.

Let's imagine a scenario that we have a module that will fetch some information from _localStorage_ or from a server is the _localStorage_ entry one is missing.

Also, let's assume this information won't be updated for entire runtime of the app (e.x. feature flag).

Then, we could do something like this:

```javascript
const featureFlagFoo = () => {
  return new Promise((resolve, reject) => {
    const cacheKey = 'featureFlagFoo';
    const cached = localStorage.getItem(cacheKey);
    if (typeof cached !== 'undefined') {
      // cached value, resolve immediately
      resolve(cached);
      return;
    }
    // no cached value, fetch, save, resolve
    someAjaxLib.fetch()
      .then((data) => {
        const value = data.foo;
        localStorage.setItem(cacheKey, value);
        resolve(value);
      })
      .catch((err) => {
        reject(err);
      })
  })
};
const featureFlagFooPromise = featureFlagFoo.catch((err) => handleError(err));

export default featureFlagFooPromise;
```



This way, the resolver kicks in already during the first execution of the code. Then your code can import the promise and most the _resolve** **_function will be executed faster since it's either resolved immediately, or the fetching started before your code actually asked for it.



```javascript
import fooPromise from './someFooPromise.js';

fooPromise.then(() => doSuccess).catch((err) => showError(err));
```


Both _resolve/reject_ resolutions are remembered by the _Promise_. It's required however since latest node versions to always define failed state callbacks, therefore it needs to be defined at least in the module.
