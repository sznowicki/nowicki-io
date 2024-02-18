---
author: sznowicki
date: 2024-02-18 19:19:36+00:00
slug: self-hosting-lvm-raid1-with-key-over-ftp
title: LVM RAID1, LUKS, encrypted with key over FTP
layout: post
link: https://nowicki.io/self-hosting-lvm-raid1-with-key-over-ftp
excerpt: I managed to set up a server that hosts real stuff and sits in my living room. Here's how I did it.
categories: [DevOps, Development, Hacking]
tags: [devops, development, hacking, selfhosting, self-hosting]
---

## Motivation

So, since I'm also hosting my own [mastodon](https://social.nowicki.io) on that [living room server](/server-in-a-living-room-self-hosting) I needed some more reliability and data security.

So basically I thought about doing two things:

1. have a RAID1 array of two SSD disks, so they mirror the data, in case one of them goes brrr, I still have all operational.
2. have those two disks encrypted so in case someone steals my server, they won't see what's inside those disks

All should be as simple as possible and reboot must happen automatically.

## How to make LVM, RAID1 with LUKS encryption

For the RAID1 setup I used LVM. First, following mor or less [this article](https://wiki.gentoo.org/wiki/Raid1_with_LVM_from_scratch#Mount_LUKS_encrypted_device_on_boot_from_LVM_RAID_1) I attached another SSD disk to the motherboard. Made a linear LVM setup with `pvcreate`, `vgcreate` and `lvcreate`.

Then, made an `ext4` layer on top with `cryptsetup luksFormat` and `mkfs.ext4`.

I tried making the online key at this step but it was already late and since I had to had some extra time buffer to recover everything in case of failure, I decided to keep the key for now in /root/key.

Had this done and before anything else, I decided to make another copy of all the productive data, just in case. I used an old HDD for that.

Next step was to move all data from a current SSD to that new one.

After this, I considered my life choices and why would I even do that, but it was too far and too late for this kind of considerations.

So, copying stuff again from first SSD to that new LVM/SSD one.

Reboot, it mounts, all good.

### Convert linear LVM to RAID1 by attaching a missing disk

Flushed the "first" SSD disk. Made another `pvcreate` and `vgextend`. Then `lvconert` failed due to some missing capacity so hey, I can shrink the logical volume right?

Well, just shrinking makes the volume corrupted. This command without `--resize-fs` break everything.

Fortunately it was totally reversible by 'lvresize' is back to original size.

Now the actual command:
```
lvresize --size -1G /dev/volumeraid/storage --resizefs
```

And `lvconvert --type raid1 -m 1 /dev/mapper/volumeraid-storage` finished successfully.

Done.

## Ubuntu, LUKS encryption over https or ftp with keyscript and curl

Next day, with a fresh mind I started finishing the setup. Tried different ways of making `crypttab` fetch the key from a remote location, which is my FritzBox router (should be enough, this whole encryption is against theft, I doubt they would steal that fritzbox along with my server).

Tried adding `init.d` script, some other ways I don't remember and finally stumbled upon [this blog post](https://tqdev.com/2023-luks-with-https-unlock) which made it all clear.

Once I understood how this work it all came together into this setup:

1. Copied curl into `initramfs-tools/hooks`
2. Added this to `crypttab`, `storage0encrypted /dev/volumeraid/storage none keyscript=/bin/luksunlockhttps,initramfs`, `initramfs` is the key to actually make it work, following [this AskUbuntu answer](https://askubuntu.com/questions/906870/luks-keyscript-being-ignored-asks-for-password)
3. `update-initramfs -k all -u`
4. Remove currently used key from `/root/key`
5. Ready have this PC stolen (as long as they don't find the fritzbox router).

PS. Headlines are little seo spamy only because it took me way to long to find right answers ;)
