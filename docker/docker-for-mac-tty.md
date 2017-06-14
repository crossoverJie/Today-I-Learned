## 进入 docker for mac 的虚拟机
### 查看 docker for mac 的 tty

`sudo ls -ahlF ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty | awk '{print $NF}'`

### 使用 screen 来进入 tty

具体见[连接 tty](https://github.com/adoyle-h/Today-I-Learned/tree/master/linux/connect-tty.md)

按 `CTRL+A CTRL+\` 退出当前 screen。

### 使用 docker 容器进入

`docker run -it --pid=host --privileged debian:jessie nsenter -t 1 -m -p -n`

### 使用 [doenter](https://github.com/fntlnz/doenter)


### 登录用户

默认为 root，无密码
