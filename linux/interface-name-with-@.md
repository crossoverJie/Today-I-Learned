## 网络接口名称的 @

比如网络接口名称为 `veth97e84578@if3`

```sh
$ cat /sys/class/net/veth97e84578/iflink
3
$ cat /sys/class/net/veth97e84578/ifindex
94
```

[/sys/class/net/<iface>/iflink 的定义](https://github.com/torvalds/linux/blob/v5.16-rc4/Documentation/ABI/testing/sysfs-class-net#L199)

> Indicates the system-wide interface unique index identifier a interface is linked to.
> Format is decimal. This attribute is used to resolve interfaces chaining, linking and stacking.
> Physical interfaces have the same 'ifindex' and 'iflink' values.

[/sys/class/net/<iface>/ifindex 的定义](https://github.com/torvalds/linux/blob/v5.16-rc4/Documentation/ABI/testing/sysfs-class-net#L188)

> Indicates the system-wide interface unique index identifier as a decimal number.
> This attribute is used for mapping an interface identifier to an interface name.
> It is used throughout the networking stack for specifying the interface specific requests/events.

- if iflink is 0 (apparently for ipip tunnels, which also behave strangely with net namespaces), it will print @NONE
- if iflink doesn't have matching ifindex, it will display @ifXX with XX being ifindex. Not having a matching ifindex is enough to know it's related to an other net namespace, see later.
- if iflink is itself (iflink == ifindex) It will not display any @. That's what should happen with real interfaces (eth0 ...) but can also be a bug (see later).
- if iflink has a matching ifindex, it will display this index' name.

### 参考

- https://unix.stackexchange.com/questions/444892/what-does-if1if2-mean-in-interface-name-in-output-of-ip-address-command-on
