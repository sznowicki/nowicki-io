# Time Machine on my home server

This will be a short post since I don't have much to say except aggregating some links.

## Self hosted linux and time machine backups over samba (docker)

So basically this seems to be a solved problem, just want to point to some links:

First I found the [Stefan Johner's blog post about SMB and time machine is actually possible](https://blog.jhnr.ch/2023/01/09/setup-apple-time-machine-network-drive-with-samba-on-ubuntu-22.04/).

This explained it's possible, but well, I don't like having stuff installed directly so thought about doing it in docker and guess what?

[Docker image exists!](https://github.com/mbentley/docker-timemachine).

Just pull, configure with docker-compose and run.

My working docker-compose.yml looks like this:

```yaml
version: '3'
services:
  tmsmb:
    image: mbentley/timemachine:smb
    restart: unless-stopped
    container_name:  timemachine
    network_mode:  "host"
    volumes:
        - '/home/sznowicki/storage/timemachine:/opt/timemachine'
    ulimits:
      nofile:
        soft: 65536
        hard: 65536
    tmpfs:
      - /run/samba
    environment:
      TM_USERNAME: "timemachine"
      TM_GROUPNAME: "timemachine"
      PASSWORD: "timemachine"
      TM_UID: "1000"
      TM_GID: "1000"
      SET_PERMISSIONS: "false"
      VOLUME_SIZE_LIMIT:  "600G"
```
