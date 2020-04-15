## Dockerfile

### 制作镜像

必读:

- [Best practices for writing Dockerfiles](https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/)

参考:

- [phusion/baseimage-docker](https://github.com/phusion/baseimage-docker)


### Entrypoint 和 CMD

用数组形式的组合，其他的组合都不灵活。

```
ENTRYPOINT ["bash", "-c"]
CMD ["/home/user/bin/xxx"]
```

**（必须用双引号，不能用单引号。否则会出错）**

等价于 `bash -c /home/user/bin/xxx`。

这样编译出来的镜像，可以用 `docker run -it <image> bash` 方便进入 shell 进行调试。
