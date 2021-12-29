## Containerd

https://containerd.io/scope/ 可以看到 containerd 的组件构成。

### 进程结构

- containerd 创建子进程 containerd-shim-runc-v2
  - 注意 containerd-shim-runc-v2 的父进程是 PID 1，这是为了防止 containerd 崩溃时，不影响容器。
  - containerd-shim-runc-v2 会监控容器进程，并上报信息给 containerd
- containerd-shim-runc-v2 创建子进程 runc
- runc 创建子进程：容器进程。容器进程运行后，runc 进程退出，容器进程由 containerd-shim-runc-v2 接管。

### config.toml

containerd 的配置文件路径默认是 `/etc/containerd/config.toml`

### crictl

[crictl](https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md) 是遵循 CRI 接口规范的 kubelet 专用 CLI 工具。用来检查和管理 kubelet 节点上的容器运行时和镜像。

### ctr

ctr 是 containerd 的客户端 CLI，类似简单版的 docker 客户端。

ctr 有 namespace，一般来说 docker 对应的是 `moby`，k8s 对应的是 `k8s.io`。

```sh
$ ctr ns ls
NAME LABELS
moby

# 等价于 docker ps
$ ctr -n moby containers ls
CONTAINER                                                           IMAGE    RUNTIME
49b6578cad79f499f14006847befc34949739ff191e05511c364ce040864eeb1    -        io.containerd.runc.v2

# 等价于 docker images。但一般来说是空的，因为 docker images 元数据都存在 docker 的 data 目录，不在 containerd 的目录下。
$ ctr -n moby images ls
REF TYPE DIGEST SIZE PLATFORMS LABELS

# 列出镜像和容器等内容。这里的 DIGEST 对应 docker image 的 RepoDigests
$ ctr -n moby content ls
DIGEST                                                                  SIZE    AGE             LABELS
sha256:036d575e82945c112ef84e4585caff3648322a2f9ed4c3a6ce409dd10abc4f34 1.452kB 2 hours         -
sha256:21a3deaa0d32a8057914f36584b5288d2e5ecc984380bc0118285c70fa8c9300 1.638kB 7 days          -
sha256:239a084766f3ebab94cba271f15bb0d4a93a6727bf8aa7f8e80eb5ebe0ea8166 1.076kB 7 days          -
sha256:3532a0050f8ec628e5d8dc9b16d8d6f97204d6893bb271063aa24edf1f6fc9cc 1.047kB 24 hours        -
sha256:396663e3d1c6102ea20893bf62a4693177dbe6b7463b961c56e6b62f81078070 4.501kB 7 days          -
sha256:58a917928b05ecfd19725325e1a5e0ed82994636114cab97b5fdb7fa8b431f06 946B    7 days          -
sha256:63a01e508ada5a123942b5afe24105d738f98ce543381ff48b1f9f905c22845e 1.159kB 2 hours         -
sha256:74bf6fc6be13c4ec53a86a5acf9fdbc6787b176db0693659ad6ac89f115e182c 526B    2 hours         -
sha256:87e303efe2f359ff82a6a61f4015c5f1cb5b49f6d679e34c9eb36fc0db5c6adb 740B    7 days          -
sha256:a2ec07de39cf5efd201ceb04403e1762ea296fb1c5d4b7e2175c11c8bf0b7f71 1.638kB 7 days          -
sha256:cffc8dd2df93619abeecc219fec2f2070a130cb26698a1bbea65ee002ccec432 736B    24 hours        -
sha256:d73ca8aeb30461ac010b03e9759b98e86bda9898ca5f6ec9a14bc3193de1a2c4 1.862kB 7 days          -
sha256:e7d88de73db3d3fd9b2d63aa7f447a10fd0220b7cbf39803c803f2af9ba256b3 528B    7 days          -
```
