---
author: sznowicki
date: 2023-12-16 18:43:36+00:00
slug: kukei-eu-search-engine
title: Kukei.eu
layout: post
link: https://nowicki.io/kukei-eu-search-engine
excerpt: Notes about how I started a new project - a curated search engine for web developers. How it started and how it's going...
categories: [Hacking, Development]
tags: [Development, kukei]
---

Notes about how I started a new project - a curated search engine for web developers. How it started and how it's going...

Writing hot, don't expect too much ;)


## What and why

For quite some time I notice that main search providers are worse and worse.
Moving from Google to Bing helped a bit but Bing has the same problem as Google: tons of SEO spam
in top 10 that are full of nonsense text to feed the algorithm while providing the answer I'm looking for somewhere deep down in the article.

AI tools like Bing Chat help a bit but still, I don't trust the answers provided by hallucinating language model, so I need to verify all the information in the sources anyway (at least Bing has those, as oppose to GPT or similar models).

I had some shower thoughts about this topic and since I have some free space in my head right now I decided to start something new that will keep my busy in the evenings and maybe will grow to something bigger than scratching my own itch.

I made a search website. It's called Kukei.eu.

## First, the name

Of course first thing you do when having a great idea is to buy a domain. We all know it. I have plenty of domains that I'll probably never use. Like ontolang.dev (had an amazing idea once to make a new fun programming language that would always start with: "and there was a light", lost interest soon tho).

Finding a good domain these days is not easy. All the short ones are usually already taken. All the explicit ones no one would type in.

Then one needs to be creative.

There's one sentence that's often in my "heimat" language, which is "kukej". It translates to German "Guck Mal", which in English would be something like "look here".

This amazing plan was totally doable, although `kukey.eu` is already taken, `kukei.eu` was free. And here we are.

'.eu' tld because why not. I'm happy to be EU citizen, all the good software recently comes from EU (Mastodon), let's be little proud.

## Second, the stack

OK, we have a domain, now we need it to run.

### Frontend

Frontend principles are easy. As a self-respected web developer I write ideally just HTML/CSS and if JS is really needed then vanillaJS with no bundling. That's the way to go, especially if your audience is expected to have the latest browsers in front of their eyes.

It took my some time to find a templating engine that would work in Cloudflare Functions and after many misses (handlebar doesn't work as it uses `eval`) I found that moustache.js works well. Although it's very limited, which can also be good if you embrace it instead of fighting it.

SEO spam now, so people will find it:

*Clouflare Functions Server Side Rendering SSR works with Moustache.js*. For details check kukei-eu/kukei-web repository where it's all available to you to copy.

Cloudflare Pages are cool because all the CI/CD is superfast, you get caching and geo-distribution out of the box, and Functions can do quote a lot. Localdev with Wrangler is meh, but works so also fine.

### Backend

Now the hard part. How do I actually index stuff and make the search work.

First I tried Algolia which is amazing, however looking at the pricing model I'd need to charge every user a monthly fee because it would scale pretty quickly.

Xata.io was the same, plus the free tier is slow.

Then I found Meilisearch which is perfect because it stays usable when your index size exceeds available RAM, is open source and self hosted and very easy to integrate. You generate a master key, give that key to Cloudflare Functions and spiders.

With all that in mind, I spin up two VPS on Hetzner, 5EUR each. One for Meilisearch, one for crawlers. Now time to code.

### Naive crawling first

With small number of sources like my own blog, some blogs from people I periodically read, crawling seems pretty easy.

Once the sources grow, it starts showing some edge cases. Maybe crawling entire website from scratch once the spider goes belly up because fetching 1GB file to analyse it's not a text/html but .iso is not a good idea.

With that in mind at the moment of writing there are two crawlers: roots and continuous.

Roots crawler checks all the sources initial entry pages, checks if there are new links, if there are some then it adds it to Mongo DB (free tier Atlas, works as a meta db) as crawl subjects.

In the future this roots crawler will actually check n-level deep from the initial entry page to search updated contents. There will also be a process to update content and find 404s but this is for later. At this state content is fresh, no need to repair anything.

Then there's an "auto" crawler. Stupid process that gets yet un-crawled random link form Mongo, checks the page, adds the content to index and marks job done.

### Scraping

Scraping is another problem that I solved surprisingly quickly.

There's a Mozilla equivalent of Safari "Reader's mode", [@mozilla/readability](https://github.com/mozilla/readability). It takes entire HTML and converts it to normalized, almost unstyled version of it. And it's open source, and it works in nodejs. And even produces quite smart excerpts.

Couldn't be better.

When crawler gets the html content, it passes it to JSDOM, queries JSDOM for all `<a>` nodes, decides whether href looks useful, then produces a normalized version of the content and pushes it to the index while adding all newly found hrefs to mongo for another crawler to scan it).

Here I have to say that it all went rather smooth because I had some experience with things like this while working on never-finished 404 link checker for AgentSlug.com. Some edge cases were already known.

## Design

The main thesis of the project is that independent, small blogs, are underrepresented in major search websites.

Content that is fair and true looses the race with SEO spam websites competition.

This is why the _curated search index_ is the key.

### Blogs are blogs

Mixing blog contents with documentation or bigger outlets like Smashing Magazine makes the blogs disappear from search results.

My paradigm is to have no pagination (also because I'm lazy and pagination is PITA).

With no pagination there is a need to be creative.

### Search per type

So the answer to this is that everyone has their own index. Docs are in docs index, blogs in blogs, big outlets in magazines.

This way every query in kukei.eu has grouped results page. First docs (bet is that you are looking for docs), then blogs (deep dives, stories related to your search, maybe some innovative thoughts), then magazines.

I strongly believe this is a good way to go. During working on this project I found so many great content in my index that probably doesn't have enough attention that is unbelievable.

### Group same websites

Another thing I noticed is that for some queries, there are like 8 results from same blog and maybe 1 from another.

Which is cool, maybe someone is really into P3 and ochl CSS colors, but it makes the results seem poor.

To solve this I decided to group the results per hostname. So if this happens you get 5 results from example.com, but only see the first one by default (first one is also the most relevant one according to Meilisearch). The rest is hidden behind a "see more from this website" checkbox.

So far it does the job, even beyond the blogs index.

## Future

I have no idea how this will end, but since first feedback from Mastodon and Lemmy communities is rather positive and I get tons of great suggestions, I'll continue and see how this evolves.

For sure, I'm having tons of fun right now with it which motivates me a lot. Worst case I'll scrap it as some point. Best case I hope it would grow into something like "tl;dr newsletter" where while it's niche it seems to be profitable.

With such a niche audience there are a lot of potential to monetise it (which is not my motivator, but _maybe_) at some point in a way that would be fair to the users and myself. Like direct cooperation with companies that offer courses or hosting. Or maybe donations from users would be enough. In any case, fun is the primary motivator.
