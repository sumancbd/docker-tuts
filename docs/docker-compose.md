## What is docker compose?

Docker Compose is a tool that was developed to help define and share multi-container applications. With Compose, we can create a YAML file to define the services and with a single command, can spin everything up or tear it all down.

1. You can create + manage multiple docker containers.
2. You have to create a YAML file.
3. You need a single command.

## Installation
Follow the step from [this link](https://docs.docker.com/compose/install/#install-the-binary-manually)

## Every container is a service

## Creating a docker-compose.yml file

```yaml
version: '3'
services:
    ...
```

## Adding a redis container under the service section

```yaml
services:
    my-redis:
        image: redis
```

## Running the service
```bash
docker-compose up --build
```

## Adding the node container under the service section
```yaml
    my-node-app:
        build:
            context: .
```

## Docker compose namespaces the container by prefixing the directory name with the service name.

## Disabling logs of the redis container
```yaml
    my-redis:
        logging:
            driver: "none"
```

## Services order does not matter

1. The order of service does not matter when using docker compose.
2. Every service(container) is attempted to start in parallel.
3. But you can specify the order of services by using the `depends_on` key.
4. Below we added an example how we can tell docker-compose that the node container depends on the redis container. Doing this we tell docker compose to start the node container after the redis container is up and running.
```yaml
    my-node-app:
        depends_on:
            - my-redis
```

## Docker volumes in docker-compose.yml

```yaml
    my-node-app:
        volumes:
            - redis-vol:/data

volumes:
  redis-vol:
```