## time 命令

当在 shell 里执行 `type time` 会提示 `time is a shell keyword`。通常我们使用的 time 只是 shell 内置的关键字而已，跟 function 一样。

然而还存在 `/usr/bin/time` 这个文件，能够显示比 `time` 更详细的信息。

BSD 系统下，使用方式是 `/usr/bin/time -lp echo 1`。
Linux 系统下，使用方式是 `/usr/bin/time -v echo 1`。
