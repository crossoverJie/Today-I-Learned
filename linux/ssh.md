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

改 `~/.ssh/config` 配置

```
Host host
# reuse the same connection
ControlMaster auto
ControlPath ~/.ssh/ssh_mux/%r@%h:%p
# keep one connection in 1hour
ControlPersist 1h
```

这样执行 `ssh host` 后，在 1 小时内登出 ssh 并不会真正登出账户，重新 ssh 就会复用已有的 socket。

但这可能会导致一些问题：比如 usermod 修改后，重新登录账户依然不生效。因为 sshd 还保留着链接进程，并没有真正登出当前账户。

### ssh -O

可以用 `ssh -O <ctl_cmd>` 来告知远端 sshd 如何操作 ssh 链接。

```sh
# 检查当前链接状态（以下结果说明连接没有断开）
$ ssh -O check host
Master running (pid=18507)

# 查看本机维持链接的进程
$ ps -ef | grep 18507
502 18507     1   0  9:02下午 ??         0:00.02 ssh: /Users/adoyle/.ssh/ssh_mux/adoyle@127.0.0.1:22 [mux]

# 可以执行 kill 18507 或者 ssh -O exit 来断开链接
$ ssh -O exit host
Exit request sent.
```

-O 还有其他命令，具体见 `man ssh`。

```
-O ctl_cmd
    Control an active connection multiplexing master process.  When the -O option is specified,
    the ctl_cmd argument is interpreted and passed to the master process.
```

ctl_cmd 取值：

- `check` check that the master process is run-ning
- `forward` request forwardings without command execution
- `cancel` cancel forwardings
- `exit` request the master to exit
- `stop` request the master to stop accepting further multiplexing requests
