## 奇怪的 ESC

在终端下按 `esc` + `n` 会有奇怪的反应，命令变成了 `:` 开头的。
其实这是 readline 的默认功能， esc 就相当于 alt，alt + n 是回溯历史命令的快捷键。

而且esc + 数字键相当于 alt + 数字键，总之是个没什么用的快捷键。

- http://superuser.com/questions/770827/how-to-disable-alt-numkey-in-bash-shell
- http://stackoverflow.com/questions/562115/press-alt-numeric-in-bash-and-you-get-arg-numeric-what-is-that

我在 bashrc 这么写把它全禁用掉了：

```
for i in "-" "n" "p" "" {0..9}; do bind -r "\e$i"; done
```

