# What is docker?
1. Package manager
2. Instead of shipping node_modules or vendor folder you ship all the binaries that your application requires. E.g. node, npm, yarn, mysql etc.

# PROS
1. It works on every machine
2. It allows you to use different version of the same software in 1 machine

# CONS
1. Lets not get into that right now.

# Why docker over a VM?
1. A VM will have an entire OS. The iso file can go more than 1GB. But docker uses the concept of container to create separate instances of the binaries you need and it is able make the containers talk to each other inside a network.

# Get Started
1. [Download docker](docs/download-docker.md)
2. [Describe hello-world](docs/hello-world.md)
3. [Docker images & containers](docs/docker-images.md)
4. [Create an nginx container](docs/create-nginx-container.md)
5. [The docker cli](docs/docker-cli.md)
6. [Docker volumes](docs/docker-volumes.md)
7. [Docker networking](docs/docker-networking.md)
8. [Docker compose](docs/docker-compose.md)
9. [Example nodejs application with docker-compose](docs/docker-compose-nodejs.md)
10. [Example php application with docker-compose](docs/docker-compose-php.md)