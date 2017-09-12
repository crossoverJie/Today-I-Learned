## 运维小技巧

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
