---
author: sznowicki
date: 2018-07-13 18:57:11+00:00
slug: how-not-to-be-a-rookie-and-let-your-users-use-their-localised-domains
title: How not to be a rookie and let your users use their localised domains
categories: [Development]
tags: [IDN, localised domains, localized domains, puny code, punycode]
---

In the previous article, it's explained [why you don't want to use a localized e-mail address](https://nowicki.io/why-you-dont-want-e-mail-in-internationalised-domain/). This article explains the opposite - how to implement IDN in your app.

## Why even bother?

You might ask, why implement something for a small fraction of users?

It is true, that in most cases it would not make a lot of sense to please someone, maybe.

But if your app targets a broad audience in many different countries, then you still might want to support people who happen to work for this company: http://中国互联网络信息中心.中国 and maybe want to sign up for your services.

The majority of the world population do not speak English. A huge number of people might not even have or like English keyboard.

Additionally, supporting it on your side is plain simple.

## Web app

As mentioned in the previous article, html email validation doesn't allow users to put localized e-mail as an input.

That might be a blocker in the registration process since not everyone is using Chrome and now everyone can convert Unicode to punycode ASCII by hand.

To fix that, simply add `novalidate` attribute to your `<form>` element. You have a server validation and your sign up form is very simple, so it won't harm the user experience, right?

## Server

Server implementation is even simpler. You just need to sanitize incoming email address by converting a right hand side (domain name) into punycode.

There is not risk of double encoding since punycode will not encode ASCII into anything else.

Second step is to make sure whenever the e-mail is shown in the UI, it would be converted to unicode again.

It can be done right before user data is sent to an app for display purposes. Ideally not sooner.

In general, it's better to use ASCII when communicating between machines.

## Further reads

[http://unicode.org/faq/idn.html ](http://unicode.org/faq/idn.html#20)
[Some day browsers will implement correct email validation](https://github.com/w3c/html/pull/1163).
