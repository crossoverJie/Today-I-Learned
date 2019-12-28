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
