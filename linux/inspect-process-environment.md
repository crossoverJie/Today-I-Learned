## 查看进程的环境变量

`cat /proc/<pid>/environ`

`cat /proc/<pid>/environ | tr "\0" "\n"`
