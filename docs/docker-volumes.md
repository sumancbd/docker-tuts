# What are docker volumes
1. Docker volumes are directories and files that exist on the host file system outside of the Docker container.
2. They can be mounted into the container.
3. Making container data persistent.

# Types of docker volumes
1. bind mount - 
    1. Are used to mount a directory from the host into the container.
    2. Does not need to be created before usage.
2. named volume -
    1. Just a named directory on the host machine that is recognizable by the docker engine.
    2. Is a directory that is created before usage.

# Create an nginx container and server your html files.

## Creating a lit website using your favorite **programming language**, HTML
```bash
mkdir -p docker-projects/my-website
echo '<h1>Hello World</h1>' > docker-projects/my-website/index.html
```

## Drum rolls :drum_with_drumsticks: 
```bash
> cd docker-projects/my-website
> ll

total 12
drwxrwxr-x 2 ubuntu ubuntu 4096 Apr 22 17:18 ./
drwxrwxr-x 3 ubuntu ubuntu 4096 Apr 22 17:18 ../
-rw-rw-r-- 1 ubuntu ubuntu   21 Apr 22 17:18 index.html

> docker container run -p 80:80 --name my-lit-website -v $(pwd):/usr/share/nginx/html nginx
```

## Creating a name volume
```bash
> docker volume create my-name-volume
```

## Create a mysql container with name volume
```bash
> docker container run -d -p 3306:3306 --name mysql-1 -v mysql_vol_1:/var/lib/mysql mysql:5.7
```

## How do I get inside the container?
```bash
> docker container exec -it my-mysql bash
```