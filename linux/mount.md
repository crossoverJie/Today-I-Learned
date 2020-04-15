## mount

### 展示挂载点

执行 `mount`

### mount --bind

`mount --bind <已有文件> <挂载点>`

原理是挂载点和已有文件共享同一个 inode。

### 挂载文件系统

`mount -t <文件系统类型> <已存在目录> <挂载点>`

### fstab

`mount` 会因为系统重启而失效，所以需要固化到 `/etc/fstab` 来保证重启后自动 mount。

实际上是由 [fsck](https://wiki.archlinux.org/index.php/Fsck) 服务来重新挂载的，`/etc/fstab` 是 fsck 读取的配置文件。

- https://wiki.archlinux.org/index.php/Fstab_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)


### /proc/self/mounts

- /etc/mtab -> /proc/self/mounts
- /proc/mounts -> /proc/self/mounts
