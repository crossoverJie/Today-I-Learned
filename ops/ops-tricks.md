## 运维小技巧

### 守则

- 修改任何文件前, 备份该文件，文件名可以为 `${原文件名}_${年月日时分秒}.bak`
- 修改配置文件后，先检查 (lint) 配置内容有效性，后应用配置。

### 查看 CPU 信息

`cat /proc/cpuinfo`

http://coolnull.com/813.html

### 查看服务器性能

- top
- uptime
- free -m
- dmesg | tail
- pidstat 1
- iostat -xz 1
- vmstat 1
- mpstat -P ALL 1
- sar -n DEV 1
- sar -n TCP,ETCP 1

参考:
http://www.infoq.com/cn/news/2015/12/linux-performance
