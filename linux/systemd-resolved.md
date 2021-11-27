## systemd-resolved

systemd-resolved 是 systemd 的一部分，作为 systemd-resolved.service 启动。

它用软连接替换了 /etc/resolv.conf，来动态维护 DNS 配置。

```sh
$ ls -l /etc/resolv.conf
/etc/resolv.conf -> /run/systemd/resolve/resolv.conf
```

### resolvectl

resolvectl 解析主机名、IP地址、域名、DNS资源记录、服务；内省及重新配置DNS解析器


resolvectl 利用 systemd-resolved.service(8) 系统服务解析主机名、IP地址、域名、DNS资源记录、服务。 默认情况下，参数列表将被视为域名/主机名的列表，程序的输出将是它们所对应的 IPv4 或 IPv6 地址。 如果参数符合 IPv4 或 IPv6 格式，那么表示反解析IP地址所对应的主机名。

`resolvectl status`

`resolvectl query $hostname`

更新 `/etc/systemd/resolved.conf`

`systemctl restart systemd-resolved.service`


### resolvconf

resolvconf 是一个兼容命令，通常是一个指向 resolvectl 软链接。resolvectl 将以受限的兼容模式运行，将所有数据推送到 systemd-resolved.service 服务中。类似 `dns` 或 `domain` 命令。systemd-resolved 是唯一支持 resolvconf 的后端。
