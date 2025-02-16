## apt

### /etc/apt/sources.list

使用镜像源加快下载速度。

以华为源和 bullseye 版本为例。

```
deb http://mirrors.huaweicloud.com/debian/ bullseye main contrib non-free
deb http://mirrors.huaweicloud.com/debian/ buster-backports main contrib non-free
deb http://mirrors.huaweicloud.com/debian/ bullseye-updates main contrib non-free
deb http://mirrors.huaweicloud.com/debian-security/ bullseye-security main contrib non-free

deb http://mirrors.huaweicloud.com/debian/ testing main contrib non-free
deb http://mirrors.huaweicloud.com/debian/ testing-updates main contrib non-free
deb http://mirrors.huaweicloud.com/debian/ testing-backports main contrib non-free
deb http://mirrors.huaweicloud.com/debian-security/ testing-security main contrib non-free
```

上面设置了 stable 源和 testing 源。stable 代表的是当前 release 版本。testing 代表的是下一个 release 版本。
另外还有 sid 源。sid 源里的包都是 unstable 的。一个包的发布过程要经历 sid -> testing -> stable。详见 https://wiki.debian.org/DebianReleases
另外还有 oldstable 源，代表上一个 release 版本。


要注意打开 `https://mirrors.huaweicloud.com/debian/dists/` 看有没有对应的目录。没有的话则代表这个镜像源里没有镜像该源的资源。

### apt 默认源

如果 /etc/apt/sources.list 设置了多个源，apt 会安装更高版本的包的源，那 testing 源默认就会被选中。这会带来混乱。
如果想把 stable 为默认源。可以这么设置，

```sh
# 这里假设当前 stable 的代号是 bullseye
echo 'APT::Default-Release "bullseye";' > /etc/apt/apt.conf.d/00local
```

参考

- https://unix.stackexchange.com/a/647205
- [Debian 的版本号及 distributions](https://archive.ph/i4N0T)


### 重新配置包

执行 `dpkp-reconfigure $pkg`

### 下载包内容

`apt download $pkg`

### 查看包的文件内容

`dpkg -L $pkg`。或者安装 `apt-file`，调用 `apt-file list`。

参考 https://cheat.readthedocs.io/en/latest/debian.html

### 根据文件路径查对应的包

```sh
$ dpkg -S /bin/ls
coreutils: /bin/ls
```

或者

```sh
$ apt-file search --regex '/bin/ls$'
9base: /usr/lib/plan9/bin/ls
coreutils: /bin/ls
klibc-utils: /usr/lib/klibc/bin/ls
```
