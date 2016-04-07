## Bash 小知识

### man bash

在 /usr/share/doc/bash/ 能找到 bash PDF 和 HTML 文档。

查看 bash built-in 命令的文档，使用 `bashman () { man bash | less -p "^       $1 "; }`，
调用： `bashman cd` 查看。

### kill %jobspec

kill 命令不止能杀掉进程，还能直接关闭后台托管进程。

使用 `jobs` 查看当前 shell 的后台任务。使用 `kill %任务序号` 来关闭任务进程。

另外，`jobs -p` 能列出对应的进程号。
