## 切换到 root 用户

### su

`su` 输出 root 用户的密码，切换到 root 用户。

`su` 命令是当前用户用来切换到另一个用户的命令，参数为用户名。执行时会要求输入密码，这个密码是你要切换到的用户的密码。

### sudo su

`sudo su` 输出当前用户的密码，当前用户需要有 root 权限，切换到 root 用户。

但是线上机器一般为了安全问题会禁止非 root 用户使用 `su` 命令，可以用以下命令。

### sudo -u <user> -i

但是线上机器一般为了安全问题会禁止 `sudo /bin/bash`，所以用 `sudo bash -c` 的方法。

### sudo bash -c

- `sudo bash -c 'su - root'`
- `sudo bash -c 'su -l'`
- `sudo bash -c 'su -'`

这三行等价，意为：用 root 权限开一个 bash 进程，进程第一行命令是以 root 用户重新登录 shell，会切换到 root 的用户目录，且重置之前的环境变量。

`sudo bash -c 'su'` 只是切换成 root 用户，不会切换用户目录，也不会重置之前的环境变量。
