## sshd -R 参数

踩到一个[坑](https://github.com/termux/termux-services/issues/18)。

原因是 sshd 会在每个 ssh 连接时，创建一个子进程来维护连接，子进程会有个 -R 的参数标志。这时去 kill sshd 主进程，主进程不会回收子进程，导致子进程变成了孤儿进程。还得手动 kill 子进程。

> the -R is an undocumented flag which SSHD uses to indicate to a child process that it has been re-executed in order to re-initialze randomization buffers, etc.

详见 https://serverfault.com/a/1024676
