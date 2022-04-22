# Docker networking

1. Docker networking is a way to connect containers to each other.
2. Docker uses bridge network by default.

# What networks do I have
```bash
docker network ls
```

## Create a redis image
```bash
docker run -d --name my-redis redis
```

## Create a sample node app
```bash
> mkdir -p docker-projects/my-node-app
> cd docker-projects/my-node-app
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
> source ~/.bashrc
> nvm install 16.10.0
> npm init -y
> docker container run -d --name my-node-app -v $(pwd):/usr/src/app node:16.9.0-alpine
```