## systemd-resolved

systemd-resolved 是 systemd 的一部分，作为一个 service 启动。

它用软连接替换了 /etc/resolv.conf，来动态维护 DNS 配置。

```sh
$ ls -l /etc/resolv.conf
/etc/resolv.conf -> /run/systemd/resolve/resolv.conf
```

`resolvectl status`
