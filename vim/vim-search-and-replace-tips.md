## VIM 搜索和替换技巧

### （不）区分大小写

不区分大小写：`/\cword` 或者 `/word\c`

区分大小写：`/\Cword` 或者 `/word\C`

### 正则匹配

`/.*word` `.*` 匹配 n 个字符

### 替换确认

`c` 表示需要确认，例如全局查找 "foo" 替换为 "bar" 并且需要确认：

`:%s/foo/bar/gc`

回车后 Vim 会将光标移动到每一次 "foo" 出现的位置，并提示

`replace with bar (y/n/a/q/l/^E/^Y)?`

按下 `y` 表示替换，`n` 表示不替换，`a` 表示替换所有，`q` 表示退出查找模式，`l` 表示替换当前位置并退出。`^E` 与 `^Y` 是光标移动快捷键

https://harttle.land/2016/08/08/vim-search-in-file.html#header-6
