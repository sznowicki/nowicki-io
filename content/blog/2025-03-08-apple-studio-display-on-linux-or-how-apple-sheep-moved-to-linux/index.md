---
author: sznowicki
date: 2025-03-08 19:19:36+00:00
slug: apple-studio-display-on-linux-or-how-apple-sheep-moved-to-linux
title: Making linux amazing for an Apple user
layout: post
link: https://nowicki.io/apple-studio-display-on-linux-or-how-apple-sheep-moved-to-linux
excerpt: I wanted to upgrade my server, ended up using Ubuntu daily
categories: [Linux, Desktop, Apple Studio Display, Ubunut, Hacking]
tags: [Linux, Desktop, Apple Studio Display, Ubunut, Hacking]
---

There are times in a life of a tinkerer where things escalate rapidly, in a roller-coaster way, with a roller-coaster final station - relief.

[for tl;dr, click here](#apple-studio-display-on-ubuntu---all-you-need-to-know)

## I want some challenge, so I'll make one myself

I don't remember why exactly, I think it was a need to make my ollama instance run little faster,
but one day I decided I need to upgrade my [server](/server-in-a-living-room-self-hosting) to something
little more modern.

After weeks of looking at Kleinanzeigen offers in my area, I ended up buying a Dell Optiplex 5050
with brand-new M2 256GB nvme disk for 50€
(actually from the same guy I bought my previous HP, coincidence?).

With that at hand I thought it's a good idea to do some clean-up on that server.

After buying new RAM I re-designed how my server works:

### No more RAID1 disks

RAID1 was kind of a stupid idea. It made my two SSDs much older than they would be when if they'd work
alone, and on top I was reaching 50% of storage due to my other project, a time machine server via
[mbentley/timemachine:smb](https://github.com/mbentley/docker-timemachine) amazing docker image.

Since I had already a brand-new M2 disk I bought a PCI-E NVME controller for a bargain price from [alternate.de](https://alternate.de)
and with an extra 1TB nvme I was ready to roll.

It was a loooooooong ride with two whole evenings spent on trying to make that shit open encrypted disks on boot,
but after learning from all my mistakes (it seems Ubuntu DOES NOT comes with proper /etc/crypttab support when you have your installation with btrfs format!),
I ended up with this setup:

1. 256GB M2 non-encrypted mounted to / and swap
2. 1TB M2 encrypted with [LUKS over ftp](/self-hosting-lvm-raid1-with-key-over-ftp) mounted to /home
3. 1TB SATA SSD non-encrypted mounted to /mnt/backups (for time machine only, it's encrypted already)
4. 1TB SATA SSD encrypted mounted to /mnt/cryptbackups for [iCloud Photos extra backup](https://github.com/steilerDev/icloud-photos-sync)

This was nice, but since I already installed Ubuntu Desktop, I wanted more.

### Ubuntu setup or an Apple-fan

So I bought a stupid Full HD screen, mounted it with a VESA arm on my desk, and started using it as an extra desktop next to my normal
Macbook Pro work setup.

And it was nice, until I noticed GNOME is actually pretty nice. Whenever there's missing official support for something,
there's always some crazy person who's maintaining a full-blown FOSS project to fill that gap.

Again, long story short, I ended up having this setup:

1. Ubuntu 24.04 with GNOME.
2. [Toshy](https://github.com/RedBearAK/toshy) for Apple-Like keymaps and shortcuts (This ctr + v was too annoying)
3. GNOME calls natural scrolling, natural scrolling, big props!
4. Edge as a main browser (plays nicely with KeepassXC passkeys, doesn't do shady stuff like Vivaldi amazon ref links).
5. Thunderbird for iCloud mail integration (also plays nicely, even syncs my calendar!)
6. iCloud drive integration via RClone (they do support iCloud Drive!)

And it was nice, for a time.

Next challenge came quickly: this FHD screen kinda sucks, what if I make Ubuntu use that Apple Studio Display?

## Apple Studio Display on Ubuntu 24.04, the story

This is where I know some traffic will come to my blog, because this is where most crazy things are happening.

So, I wanted to see the actual beauty of GNOME, on a "normal" screen (normal means not with blurry fonts because all OEMs decided it's a good idea to put a fucking
blur filter on their LCDs).

### Cable, GPU for Apple Studio Display on linux

After searching for answers I learned that Apple Studio Display works fine with USB-C (4) to DisplayPort 1.4 cables.

Requirements are:
- cable must support 8K
- cable must be Bi-Directional

OK, but my only DP port I have is 1.2, this ain't work of course.

I searched for new GPUs that support 5K displays without extra power supply (Dell doesn't have it) and found some Chinese no-name Radeon 550 with tech specs claiming they do support 5K displays on DisplayPort.

They did not.

While the cable worked, whenever I'd go higher than 3840px wide, the screen would just blink from black to gray.

So it must be the cable right? Because this Radeon supports 5K!

So I bought 2 more cables (luckily I did that on Amazon, easy returns was a must-have).

After changing the cables it was the same thing.

OK, I'll change the GPU then, but how? This Dell has proprietary PSU (power supply unit) with weird connectors. So I can't replace it with a standard one, nor use it for extra GPU power.

How about replacing that PSU and supply motherboard with an adapter?

Sounds good, but there's no place in the case for that.

I'll replace the case then!

But hey, this DELL CPU fan doesn't have it's own mount, it's screwed to a PROPRIETARY case holes!

That was when I flipped and just bought a new PC. Good bye, proprietary aftermarket Dell/HP PCs.

### New PC, all works!

With new Ryzen CPU, Asus motherboard, PSU and case I started the assembly line and surprisingly, after moving all storage disks to that new PC... Ubuntu booted like nothing happened.

All encryption worked, all docker containers started. Didn't have to move my finger to make my server up and running again.

But Apple Studio Display is still black...

## Apple Studio Display on Ubuntu - all you need to know

### Sum of all problems

Now I break chronological story telling because I lost myself a bit these days. Here's all you need to know if you want to use Apple Studio Display on Ubuntu 24.04 (or linux in general):

#### Apple Studio Display needs bi-directional USB-C to DP 1.4 cable

Most USB->DP cables are made for people who want to connect their USB-C devices with Display Port monitors.

You need to buy a bi-directional one.

#### DP AND USB to USB-C cable

There is a special [USB-C to Display Port with USB extension cable](https://www.amazon.de/dp/B0BNX7MS6N?ref=ppx_yo2ov_dt_b_fed_asin_title) that makes wonders, as it
takes the Display Port signal, puts it to Apple Studio Display AND in the same time connects Apple Display extra devices like speakers and whatever is plugged in to it's USB with your PC.

This weirdly works out of the box.

#### X11 defaults Apple Studio Display to a faulty resolution

This might be AMD specific, but for whatever reason, X11 always defaults to a faulty, seemingly unsupported resolution.

This makes the display just black.

I noticed this while thinking this setup doesn't work at all, but also noticed I can see stuff during boot on ASD and I can mirror screens, I can even use just the Apple Display, it just never works
when I unplug the HDMI.

The current-state-of-my-knowledge is that X11 defaults to a faulty 2000 something resolution that Apple Display announces but apparently can't render.

So I made a little hack and ended up with this `~/.config/monitors.xml`

```xml
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <scale>1.25</scale>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>HDMI-A-0</connector>
          <vendor>ACR</vendor>
          <product>EK251Q E</product>
          <serial>14030ED0D3W01</serial>
        </monitorspec>
        <mode>
          <width>1920</width>
          <height>1080</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
    </logicalmonitor>
  </configuration>
  <configuration>
    <logicalmonitor>
      <x>5120</x>
      <y>445</y>
      <scale>1</scale>
      <monitor>
        <monitorspec>
          <connector>HDMI-A-0</connector>
          <vendor>ACR</vendor>
          <product>EK251Q E</product>
          <serial>14030ED0D3W01</serial>
        </monitorspec>
        <mode>
          <width>1920</width>
          <height>1080</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
    </logicalmonitor>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <scale>2</scale>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DisplayPort-0</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>5120</width>
          <height>2880</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
    </logicalmonitor>
  </configuration>
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <scale>2</scale>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DisplayPort-0</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>5120</width>
          <height>2880</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
    </logicalmonitor>
  </configuration>
</monitors>

```

What I did there was copying the `<configuration>` setup when I use both displays and make a single one with just DisplayPort-0.

So when I disconnect HDMI, GNOME takes this config and overrides X11 defaults.

Where it doesn't work is GDM3 (somehow they ignore monitors.xml in Ubuntu 24.04). So when X11 starts, I end up with black screen GDM3.

But _this is fine_. I can just hit arrow down, arrow up (to wake up my keyboard), ENTER and put my password. _This is fine_.

#### You may not need special GPU for Apple Studio Display on Linux

I don't know why, but my Ryzen CPU claims they only support displays up to 4K via Display Port. Apple Studio Display with 5K works tho. Don't know why, but I'm happy.

#### Apple Studio Display brightness control on linux

That's easy, with that special USB/DB->USB cable you can just build [this project](https://github.com/juliuszint/asdbctl) and carry on. It just works.

## Overall feeling

I am absolutely amazed how Ubuntu with GNOME is nicely designed and offers really well-executed UX for a person who comes from Apple.

Most stuff makes sense for me, with Toshy I can use my established muscle memory and in general it's really, really, pretty.

Just look how clean and minimalistic it is while offering almost same easy-to-use user experience!

![Ubuntu with GNOME mountain background](./ubuntu-my-current-setup.png)

Since I have all I need for iCloud integration, I think I'll use this setup as my main driver now. Especially given that it was pretty cheap, powerful and I can upgrade it any time.
