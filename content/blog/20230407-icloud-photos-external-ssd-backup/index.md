---
author: sznowicki
date: 2023-04-07 18:43:36+00:00
slug: icloud-photos-external-ssd-backup
title: Backup your iCloud Photos on external SSD
layout: post
link: https://nowicki.io/icloud-photos-external-ssd-backup
excerpt: There are plenty of tutorials how to backup your iCloud photos on an external SSD. This is better one.
categories: [Hacking]
tags: [Hacks, Apple, iCloud]
---

## The nice way

### Why other tutorials suck

There are plenty of tutorials online on how to backup your iCloud Photos on an external drive while you have not enough space on your main device.

They all basically tell to create new Photos library on an external SSD and use it as a system library.

The problem with that approach is that it's not really a backup since you loose an access to any iCloud photos while the disk is not connected to your laptop.

So i was thinking (a lot) about it and finally found a way to go.

The requirements are:

- you have big iCloud Photos library
- you can't keep all "originals" on any of your macbooks (if you can, just continue doing it and for backup you can just copy the library to your SSD or wherever you want to keep it)

### The way to do it nice

So the steps are following:

1. Create new local macOS account.
2. Log in to it, do not connect your iCloud account yet in the intro section.
3. Once it's ready, open settings, connect to iCloud there.
4. It will ask you to provide password to disconnect this mac from FindMy. Cancel it (it will be still connected).
5. Once it's done, go to iCloud settings and disable all of it. Including Photos.
6. Alt + left click on Photos app. This brings library selection window. Choose "new library".
7. Mount your SSD, create new library there.
8. Library opens, open Photo settings.
9. Mark this library as "system library".
10. Choose iCloud tab, enable sync with "full originals".
11. Now let it sync (for me with 300GB it usually takes some 12 hours).

Here it is.

This way you get two accounts on your macbook. One is main account where iCloud Photo can be "optimised", hence smaller versions. This is what you use on daily basis and makes your macbook slim with data.

The second account is purely for iCloud Photos full sync on your external drive.

Once you have that file synced on that drive, you can and should also upload it to some cloud backup solution like Hetzner.

Don't forget to encrypt it first! You don't want anyone have access to your family photos library.

I can recommend [this open ssl AES encryption](https://superuser.com/a/370412) which is super fast (you can't belive how fast it is) and should be just enough for this kind of files.

What I usually do is every month I'd enrypt entire library, SCP to Hetzner backup storage, remove the old one.

This way I have many iCloud Photos backups:

1. 1 full copy on iPad Pro (got the 512G version).
2. 1 full copy on iCloud itself.
3. 1 full copy on external drive.
4. 1 full copy on Hetzner data center.

This complies with _3-2-1_ rule:

- 3 copies of data (got 4)
- on minimum 2 different medias (also 4)
- and 1 is in different location (3 locations, home, iCloud DC, Hetzner DC)

This way I'm fairly sure my son will never tell me I'm the reason he has no photos from his childhood ;)
