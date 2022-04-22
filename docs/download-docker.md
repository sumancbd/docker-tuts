# Linux
## Ubuntu

### Using curl
Head over to https://get.docker.com/
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

### Using apt-get
Follow the steps mentioned in this [link](https://docs.docker.com/engine/install/ubuntu/)

## For Mac users
Download docker desktop from [here](https://docs.docker.com/desktop/mac/install/)

## For windows users
You are on your own

### Post installation on a linux machine
You need to add your user to the docker group in order to use it without the sudo command.
```bash
sudo usermod -aG docker $USER
```
Then you need to restart your shell in order to apply the changes.

### Verify docker installation
```bash
docker --version
```

### Run hello-world
```bash
sudo docker run hello-world
```