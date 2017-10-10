## 学习 Docker

### 学习资料

- [docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet)
- [Docker — 从入门到实践](https://github.com/yeasy/docker_practice)

### 制作镜像

必读:

- [Best practices for writing Dockerfiles](https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/)

参考:

- [phusion/baseimage-docker](https://github.com/phusion/baseimage-docker)

#### alpine apk update 总是失败

使用 `until apk update; do sleep 1; done` 让它失败后重装直到成功。

#### docker-alpine 删除缓存

`apk cache clean` 无效，因为默认没有开启 `Local Cache`。可以在最后执行 `rm -rf /var/cache/apk/*` 来删除缓存。

### 学习 swarm

- https://github.com/play-with-docker/play-with-docker
- https://cntnr.io/building-a-0-docker-swarm-in-seconds-80bf13a4d0a7

这个非常酷，便于学习搭建 swarm 集群

### 工具

- [dockward](https://github.com/abiosoft/dockward): 简单地端口转发到容器，不需要配置 nginx

### 常用命令

`docker system df` 查看 image/container/volume 在本机的数据占用情况

`docker info` 查看 docker 服务器和客户端信息，实际调用的是 `docker system info`
