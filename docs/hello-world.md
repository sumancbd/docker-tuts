# What just happen
1. The Docker client contacted the Docker daemon.
2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
(amd64)
3. The Docker daemon created a new container from that image which runs the
executable that produces the output you are currently reading.
4. The Docker daemon streamed that output to the Docker client, which sent it
to your terminal.

# 1. The Docker client contacted the Docker daemon.
```bash
sudo service docker status
```

# 2. The Docker daemon pulled the "hello-world" image from the [Docker Hub](https://hub.docker.com/).
```bash
docker image ls
docker pull hello-world
```

# 3. The Docker daemon created a new container from that image which runs the executable that produces the output you are currently reading.
```bash
docker container ls
docker container ls -a
```

# 4. The Docker daemon streamed that output to the Docker client, which sent it to your terminal.
Docker daemon > Docker cli/client > Your terminal