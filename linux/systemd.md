## systemd

![Systemd 架构图](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016030703.png)

- https://github.com/systemd/systemd
- https://www.freedesktop.org/wiki/Software/systemd/
- [阮一峰 - Systemd 入门教程：命令篇](http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html)
- https://wiki.archlinux.org/index.php/Systemd_(简体中文)

### systemdctl

systemctl 命令操作 systemd 来管理服务，取代了 systemV 的service、chkconfig、setup、init 等指令。

- `systemctl` 或 `systemctl list-units` 列出已知的服务
- `systemctl list-dependencies` 查某个服务依赖的服务，也可以用 `systemctl list-dependencies --reverse` 查某个服务被谁依赖。
- `systemctl list-sockets` 查看服务监听的 socket 文件。

懒得列举，具体查 man 手册。

### journalctl

> journalctl 用来查询 systemd-journald 服务收集到的日志。systemd-journald 服务是 systemd init 系统提供的收集系统日志的服务。

- https://www.cnblogs.com/sparkdev/p/8795141.html
