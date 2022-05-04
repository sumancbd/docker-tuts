# Docker networking

1. Docker networking is a way to connect containers to each other.
2. Docker uses bridge network by default.
# What are we doing here?
1. Learn how to create a network
2. Create a redis container
3. Create a simple node app
4. Build a node image using Dockerfile
5. Run the node app by creating a container of the node image
6. Attach both container to the same network.
7. Understand networking.

# What networks do I have
```bash
docker network ls
```

## Create a redis container
```bash
docker run -d --name my-redis redis
```

## Create a sample node app
```bash
> cd /home/suman/Projects/docker-basics/docker-network-sample-app
> docker build -t node-app-1 .
```

## Create a new network
```bash
docker network create --driver bridge my-network
```

## Attach the redis app to the network
```bash
docker network connect my-network my-redis
```

## Create a new container using image node-app-1 and run
```bash
> docker run --rm --name my-node-app node-app-1
```

## Run the node app container in the same network as the redis container
```bash
docker run --network my-network --rm --name my-node-app node-app-1
```

## Change app.js \"HOST\" constant to the redis container name
```bash
const HOST = 'my-redis';
```

***Reason: Docker uses DNS aliasing which allows you to use the container name instead of the IP address.***

# Resources:

1. [Diagram](./resources/docker-basics-networking.jpg)