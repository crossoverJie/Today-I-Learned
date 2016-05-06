## Bash 小知识

### man bash

在 /usr/share/doc/bash/ 能找到 bash PDF 和 HTML 文档。

查看 bash built-in 命令的文档，使用 `bashman () { man bash | less -p "^       $1 "; }`，
调用： `bashman cd` 查看。

### kill %jobspec

kill 命令不止能杀掉进程，还能直接关闭后台托管进程。

使用 `jobs` 查看当前 shell 的后台任务。使用 `kill %任务序号` 来关闭任务进程。

另外，`jobs -p` 能列出对应的进程号。

### <Tab> 补全文件路径开启颜色

首先，这个特性是在 bash 4.3 版本中加入的。
而 mac 自带的 bash 版本是 3.x。你需要通过 `brew install bash` 安装最新的 bash。

然后，在 `~/.inputrc` 里加一行 `set colored-stats on` 即可。

参考[这个问题](http://superuser.com/questions/251107/how-to-get-a-colored-tab-completion)

