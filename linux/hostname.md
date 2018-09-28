## Hostname in Linux

修改 /etc/sysconfig/network 和 /etc/hostname。需要重启系统。

参考文章

- https://kerneltalks.com/linux/all-you-need-to-know-about-hostname-in-linux/
- https://jaminzhang.github.io/linux/deep-understanding-of-linux-hostname/

### 关于 FQDN

FQDN 定义: https://www.wikiwand.com/en/Fully_qualified_domain_name

python 2.x 中 socket 库 `socket.getfqdn()` 调用的是 `hostname --all-fqdsn`。可能会有坑。

参考 Issue: https://bugs.python.org/issue5004
