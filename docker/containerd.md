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
