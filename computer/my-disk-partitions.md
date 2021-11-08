## 我的硬盘分区规划

### 128 SSD

做系统盘

- /boot 1G
- /     127G

### 1T HDD

做存储盘

- /root    10G
- /home    400G
- /var/log 10G
- /tmp     50G

由于我的内存只有 4G，所以 /tmp 没使用 tmpfs，而是挂载到 HDD。

总共 470 G。
剩下的做 NAS 单盘存储。

### 2T HDD * 2

做 RAID 1 存储

### 参考

```
┌───────────┬──────────────┬────────────────┐
│ /dev/shm  │ always tmpfs │ Linux specific │
├───────────┼──────────────┼────────────────┤
│ /tmp      │ can be tmpfs │ FHS 1.0        │
├───────────┼──────────────┼────────────────┤
│ /var/tmp  │ never tmpfs  │ FHS 1.0        │
└───────────┴──────────────┴────────────────┘
```

- https://superuser.com/questions/45342/when-should-i-use-dev-shm-and-when-should-i-use-tmp
