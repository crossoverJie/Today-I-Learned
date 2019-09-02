## ip 与 ifconfig 命令

ip 命令来自于 iproute2，是为了替代 ifconfig 命令。
ifconfig是net-tools中已被废弃使用的一个命令，许多年前就已经没有维护了。

Mac 电脑上通过 `brew install iproute2mac` 来安装，但是并不完全兼容 iproute2，[源码](https://github.com/brona/iproute2mac)。

### 参考资料

![Nettools-vs-Iproute2.png](https://linoxide.com/wp-content/uploads/2014/05/Linux-Nettools-vs-Iproute2.png)

- [LinOxide - How to use IP Command in Linux with Examples](https://linoxide.com/linux-command/use-ip-command-linux/)
- [IPROUTE2 Utility Suite Howto](http://www.policyrouting.org/iproute2.doc.html)

### ip route

查看所有路由

### ip a
