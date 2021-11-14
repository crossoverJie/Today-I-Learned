## 硬盘分区

```sh
# 查看硬盘信息
fdisk -l

# 对硬盘进行分区
fdisk /dev/sda

# 用 ext4 文件系统对分区进行格式化。`-m 5` 代表保留 5% 的保留空间。
# 保留空间的意义是万一磁盘满了，可以给 root 用户修复问题提供硬盘空间。不一定每个分区都需要保留空间。
mkfs.ext4 -m 5 /dev/sda1

# 对于非系统盘，通常不用保留分区。
# -L 打标签用于辨别对应哪块硬盘，标签名最大长度 16 bytes
mkfs.ext4 -m 0 -L WD /dev/sda2
```

### 调整保留空间 (reserved blocks)

在格式化后也可以调整保留空间。比如，
`tune2fs -r 0 /dev/sda1` 把保留空间设为 0。
或者 `tune2fs -m 1 /dev/sde1` 设为 1%。

`tune2fs -l /dev/sda1 | grep 'Reserved'` 查看某个分区的保留空间。
