---
author: sznowicki
comments: true
date: 2018-07-13 18:32:09+00:00
slug: why-you-dont-want-e-mail-in-internationalised-domain
title: Why you don't want e-mail in internationalised domain
categories: [Development]
tags: [html validation, IDN, localised domains, localized domains]
---

## 1. Looks good, but not everyone can type it



You might think that "my-wörk.de" is a cool name for your website and hällo@my-wörk.de is even better (Unicode in username is currently not available), but the problem is that not everyone knows how to type umlauts.

Some people say it's possible on Windows with an English keyboard, but I think it's just an urban legend.



## 2. Sooner or later you will not register an account (or log in)



The browser support for IDN ([Internationalized Domain Name](https://en.wikipedia.org/wiki/Internationalized_domain_name)) is awesome... when typing a website address in the URL bar. It's a completely different story when speaking about forms.

Firefox and Safari send email input as a raw string (wörk stays wörk). Chrome converts the domain name to Punycode on the fly (wörk is sent to a server as "xn--wrk-sna").

For websites which don't support Punycode domains on the server, it's possible to register an account using Chrome. It will be possible to log using Chrome. Except you try to log in using Chrome on iOS (it uses Safari webview).

Additionally, you might not even register an account as well if a website uses an email input type.



## 3. HTML "email validation" specification



In short words: HTML defines a regex for email validation. This regex doesn't implement IDN. You will not be able to put your e-mail in an e-mail sign up form. If a website uses `<input type="email" />` (which is very, very common).

Again, this doesn't apply to Chrome on a desktop and Android which converts it on the fly.



## 4. Many websites and servers are not prepared for it



Even though IDN 2008 specification is made in... 2008, it's very common that developers don't bother supporting it. Managers don't bother even more since it's not common to see such domains (or ??.to) and it's not likely that someone would complain (except some wild external QA team).






