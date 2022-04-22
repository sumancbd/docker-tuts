# What are docker images

1. A docker image is a read-only executable or binary or line of codes written by someone else and shared with you.
2. You may not modify it but you may use it to your benefit.
3. It is a blueprint of how to build a container.

# What is a docker container
A docker container is an instance of a docker image.

# Create an elasticsearch container
```
docker run -d -p 9200:9200 elasticsearch:2
curl -XGET 'http://localhost:9200/'
```
1. docker run -d -p [port_on_your_machine]:[port_inside_the_container] [image_name]
2. -d = run in the background
3. -p = port mapping

# Create another container with the same image but a different name
```
docker run -d -p 9200:9200 --name my-elasticsearch elasticsearch:2
```

# Stop the container
```
docker container stop [container_name/id]
```

# Remove a container
```
docker container rm [container_name/id]
```

# Remove a running container
```
docker container rm -f [container_name/id]
```
