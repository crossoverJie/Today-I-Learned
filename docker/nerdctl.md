## nerdctl

[nerdctl](https://github.com/containerd/nerdctl) 实现了 volume, network 的创建和管理。

nerdctl 的组成：

- 容器
  - Containerd
- 镜像
  - [BuildKit](https://github.com/moby/buildkit): for using `nerdctl build`. BuildKit daemon (`buildkitd`) needs to be running.
- 存储
- 网络
  - [CNI plugins](https://github.com/containernetworking/plugins): for using `nerdctl run`.
  - [CNI isolation plugin](https://github.com/AkihiroSuda/cni-isolation): for isolating bridge networks (`nerdctl network create`)
- 其他
  - [RootlessKit](https://github.com/rootless-containers/rootlesskit) and [slirp4netns](https://github.com/rootless-containers/slirp4netns): for [Rootless mode](./docs/rootless.md)
