## 硬盘分区

```sh
# 查看硬盘信息
fdisk -l

# 对硬盘进行分区
fdisk /dev/sda

# 用 ext4 文件系统对分区进行格式化。`-m 5` 代表保留 5% 的保留空间。
# 保留空间的意义是万一磁盘满了，可以给 root 用户修复问题提供硬盘空间。不一定每个分区都需要保留空间。
mkfs.ext4 -m 5 /dev/sda1
```

### 调整保留空间 (reserved blocks)

在格式化后也可以调整保留空间。比如，

`tune2fs -r 0 /dev/sda1` 把保留空间设为 0。
或者 `tune2fs -m 1 /dev/sde1` 设为 1%。

但是修改之后 `df -h` 看已用百分比没有变化。

`tune2fs -l /dev/sda1 | grep 'Reserved'` 查看某个分区的保留空间。
