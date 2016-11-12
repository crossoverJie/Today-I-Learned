## 进入 docker for mac 的虚拟机
### 查看 docker for mac 的 tty

`sudo ls -ahlF ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty | awk '{print $NF}'`

### 使用 screen 来进入 tty

具体见[连接 tty][0]

[0]: https://github.com/adoyle-h/Today-I-Learned/tree/master/linux/connect-tty.md

### 登录用户

默认为 root，无密码
