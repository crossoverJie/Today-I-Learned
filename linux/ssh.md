## SSH

### SSH Config

使用 ssh config 来管理远端。

使用 `Include` 关键词来加载其他 ssh 配置文件，这样方便分开管理。

```
# ~/.ssh/config
Include config.d/*
```

### One-Off Command

`ssh <host> <command>` 可以直接在远端机器执行命令，比如 `ssh <host> hostname` 。

### 快速把本地的 public key 添加到远端的 authorized_keys

`ssh-copy-id <host>`

如果没有 ssh-copy-id，也可以执行 `cat ~/.ssh/id_rsa.pub | ssh <host> 'mkdir -p ~/.ssh; cat >> ~/.ssh/authorized_keys'`

### 编程方式输入 ssh 密码

[sshpass](https://github.com/kevinburke/sshpass) 通过编程方式在 ssh 时输入用户名和密码。不安全，勿用在生产环境。

[参考文章](https://linux.cn/article-8086-1.html)。

### ssh 隧道

ssh 隧道 (ssh turnnel) 一般用来做端口转发。

两种转发方式，Local Port Forwarding (-L 参数) 和 Remote Port Forwarding (-R 参数)。

参考文章

- https://www.zsythink.net/archives/2450

### ssh SOCKS 代理

```sh
# To create a SOCKS proxy on localhost and port 9999
ssh -D 9999 <host>
```

### 创建持久连接

`ssh -MNf <host>`
同时还要改 `~/.ssh/config` 配置

```
Host host
ControlPath ~/.ssh/master-%r@%h:%p
ControlMaster no
```

这样每次执行 ssh 就不会创建新的 socket。
