| **Docker Command**                   | **Description**                                              | **Example**                                                   |
|--------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------|
| `docker --version`                   | Shows Docker version installed on the system.                | `docker --version`                                             |
| `docker pull <image>`                | Pulls an image from the Docker Hub repository.               | `docker pull ubuntu`                                           |
| `docker images`                      | Lists all Docker images available locally.                   | `docker images`                                                |
| `docker ps`                          | Lists all running containers.                                | `docker ps`                                                    |
| `docker ps -a`                       | Lists all containers (including stopped ones).               | `docker ps -a`                                                 |
| `docker run <image>`                 | Runs a command in a new container from an image.             | `docker run ubuntu`                                            |
| `docker run -it <image> /bin/bash`   | Runs a container interactively with a bash terminal.         | `docker run -it ubuntu /bin/bash`                              |
| `docker stop <container>`            | Stops a running container.                                   | `docker stop container_name`                                   |
| `docker start <container>`           | Starts a stopped container.                                  | `docker start container_name`                                  |
| `docker rm <container>`              | Removes a container.                                         | `docker rm container_name`                                     |
| `docker rmi <image>`                 | Removes a Docker image.                                      | `docker rmi image_name`                                        |
| `docker build -t <name> .`           | Builds an image from a Dockerfile in the current directory.   | `docker build -t my_image .`                                   |
| `docker exec -it <container> /bin/bash`| Accesses a running container's shell interactively.          | `docker exec -it container_name /bin/bash`                     |
| `docker logs <container>`            | Shows the logs of a specific container.                      | `docker logs container_name`                                   |
| `docker inspect <container>`         | Displays detailed information about a container or image.    | `docker inspect container_name`                                |
| `docker-compose up`                  | Starts all services in the Docker Compose file.              | `docker-compose up`                                            |
| `docker-compose down`                | Stops and removes all services defined in Docker Compose.    | `docker-compose down`                                          |
| `docker network ls`                  | Lists all Docker networks.                                   | `docker network ls`                                            |
| `docker volume ls`                   | Lists all Docker volumes.                                    | `docker volume ls`                                             |
| `docker stats`                       | Shows a live stream of resource usage statistics for containers.| `docker stats`                                                |
| `docker tag <source_image> <target_image>`| Tags an image for uploading to a repository.             | `docker tag ubuntu myrepo/ubuntu:v1.0`                         |
| `docker push <image>`                | Pushes an image to a Docker repository.                      | `docker push myrepo/ubuntu:v1.0`                               |
| `docker save -o <output_file> <image>`| Saves an image to a tar file.                                | `docker save -o ubuntu.tar ubuntu:latest`                      |
| `docker load -i <input_file>`        | Loads an image from a tar file.                              | `docker load -i ubuntu.tar`                                    |
| `docker cp <container>:<path> <local_path>` | Copies files/folders between a container and local filesystem.| `docker cp container_name:/var/log ./log_files`               |
| `docker network create <network>`    | Creates a new Docker network.                                | `docker network create my_network`                             |
| `docker run --rm <image>`            | Runs a container and removes it when it exits.               | `docker run --rm ubuntu echo Hello World`                      |
| `docker volume create <volume>`      | Creates a new Docker volume.                                 | `docker volume create my_volume`                               |
| `docker run -v <volume>:<path> <image>`| Mounts a volume to a container at a specific path.          | `docker run -v my_volume:/data ubuntu`                         |
| `docker container prune`             | Removes all stopped containers.                              | `docker container prune`                                       |
| `docker image prune`                 | Removes unused Docker images.                                | `docker image prune`                                           |
| `docker system prune`                | Removes all unused containers, networks, and images.         | `docker system prune`                                          |
