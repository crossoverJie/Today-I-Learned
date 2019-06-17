## Bash 小技巧

### TOC

<!-- MarkdownTOC GFM -->

- [man bash](#man-bash)
- [help help](#help-help)
- [kill %jobspec](#kill-jobspec)
- [<Tab> 补全文件路径开启颜色](#tab-补全文件路径开启颜色)
- [bash-completion](#bash-completion)
- [PS1 等提示符的定义](#ps1-等提示符的定义)
- [右侧打印](#右侧打印)
- [打印所有 bash options (set -o 或 shopt)](#打印所有-bash-options-set--o-或-shopt)
- [提取一句话的第一个单词](#提取一句话的第一个单词)
- [/usr/libexec/path_helper](#usrlibexecpath_helper)
- [设置环境变量与命令写同一行](#设置环境变量与命令写同一行)
- [declare -r 与 readonly 的区别](#declare--r-与-readonly-的区别)
- [得到上层绝对路径的快捷方法](#得到上层绝对路径的快捷方法)
- [xtrace](#xtrace)
- [让 xtrace 打印更多信息](#让-xtrace-打印更多信息)
- [$- 查询 set options 开启状况](#--查询-set-options-开启状况)
- [extglob](#extglob)
- [分解字符串成数组](#分解字符串成数组)
- [在字符串里用换行符](#在字符串里用换行符)
- [`=~` 的正则表达式](#-的正则表达式)
- [BASH 的 PS1/PS2/PS3/PS4](#bash-的-ps1ps2ps3ps4)
- [BASH PS1 需要包裹在 \[ \] 里](#bash-ps1-需要包裹在---里)
- [目录是可执行的](#目录是可执行的)
- [获得字符的转义码](#获得字符的转义码)
- [使用 bind 改变键盘字符的触发效果](#使用-bind-改变键盘字符的触发效果)
- [用 ANSI Escape Code 改变 Shell 文字样式](#用-ansi-escape-code-改变-shell-文字样式)

<!-- /MarkdownTOC -->

### man bash

在 /usr/share/doc/bash/ 能找到 bash PDF 和 HTML 文档。

~~查看 bash built-in 命令的文档，使用 `bashman () { man bash | less -p "^       $1 "; }`，~~
~~调用： `bashman cd` 查看。~~

### help help

显示内建命令的相关信息

### kill %jobspec

kill 命令不止能杀掉进程，还能直接关闭后台托管进程。

使用 `jobs` 查看当前 shell 的后台任务。使用 `kill %任务序号` 来关闭任务进程。

另外，`jobs -p` 能列出对应的进程号。

### <Tab> 补全文件路径开启颜色

首先，这个特性是在 bash 4.3 版本中加入的。
而 mac 自带的 bash 版本是 3.x。你需要通过 `brew install bash` 安装最新的 bash。

然后，在 `~/.inputrc` 里加一行 `set colored-stats on` 即可。

参考[这个问题](http://superuser.com/questions/251107/how-to-get-a-colored-tab-completion)

### bash-completion

https://github.com/scop/bash-completion 比内置 bash 补全更全面。

bash 3.0+ 版本通过 `brew install bash-completion` 来安装。

bash 4.0+ 版本通过 `brew install bash-completion2` 来安装。

### PS1 等提示符的定义

Bash 有四个可以定制的提示符

- PS1 是在每个命令前都显示的主要提示符，大部分用户都是定制这个值。
- PS2 命令需要输入时的第二提示符(比如多行命令).
- PS3 不常用，Bash 的内置 select 显示交互菜单时使用. 和其它提示符不一样，它不扩展 Bash escape sequences. 通常在使用包含 select 的脚本时会需要定制此提示符。
- PS4 也不常用，在调试 bash 脚本时显示。
所有提示符都可以通过设置变量到需要的数值进行定义(通常在 ~/.bashrc)

https://wiki.archlinux.org/index.php/Color_Bash_Prompt_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#.E6.8F.90.E7.A4.BA.E7.AC.A6.E3.80.80

### 右侧打印

```sh
rightprompt()
{
    printf "%*s" $COLUMNS "right prompt"
}

export PS1='\[$(tput sc; rightprompt; tput rc)\]left prompt > '
```

https://wiki.archlinux.org/index.php/Color_Bash_Prompt_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#Right-justified_text


### 打印所有 bash options (set -o 或 shopt)

注意 set 和 shopt 是两个用处不同的命令，配置不一样

- `set -o`
- `shopt -p` 或 `shopt`。这两个命令输出不同格式

### 提取一句话的第一个单词

```sh
str='  word1 word2'
word_list=($str)
echo ${word_list[0]}
```

### /usr/libexec/path_helper

/usr/libexec/path_helper -s

http://unix.stackexchange.com/questions/210158/how-can-i-list-bashs-options-for-the-current-shell

### 设置环境变量与命令写同一行

比如 `hello=world echo $hello` 并不会输出信息

`hello=world; echo $hello` 或者  `hello=world && echo $hello` 才可以。

但是 `hello=world <命令>` 在`<命令>`中是能获取到 `$hello` 的值。

### declare -r 与 readonly 的区别

https://stackoverflow.com/a/30362832/4622308

### 得到上层绝对路径的快捷方法

```sh
path=$(pwd)      # 例如 /a/b/c
# 移除掉从末尾匹配到 `/*` 的部分
echo ${path%/*}  # => /a/b
```

### xtrace

使用 `set -o xtrace` 来跟踪命令，获取更详细的 debug 信息。

自 Bash 4 开始支持 `BASH_XTRACEFD` 变量，它能改变 xtrace 输出指向到哪个文件描述符里，但最好别改动它，因为关闭 BASH_XTRACEFD 会导致文件描述符也关闭。
BASH_XTRACEFD 默认为 2，所以 xtrace 默认输出到标准错误流。

### 让 xtrace 打印更多信息

通过修改 PS4 变量，比如下面这行会打印当前文件名:行号:当前函数。

`PS4='+[${BASH_SOURCE}:${LINENO}:${FUNCNAME[0]:+${FUNCNAME[0]}}()]: '`

参考自 http://wiki.bash-hackers.org/scripting/debuggingtips#making_xtrace_more_useful

### $- 查询 set options 开启状况

$- 是一串字符串，由 set option 的简写标记组成。

`[[ $- =~ [x] ]]` 可以这样写来判断是否开启 -x，即 xtrace。

`[[ $- =~ [xv] ]]` 还可以判断其他组合

### extglob

> as if the extglob shell option were enabled. The ‘=’ operator is identical to ‘==’

`[[]]` 条件判断中，当 extglob 选项开启，`=` 用法类似 `==`

`shopt | grep extglob`

### 分解字符串成数组

比如以 `,` 分解字符串成数组。

`IFS=',' read -r -a folders <<< "a,b,c,d"`

### 在字符串里用换行符

用 `$''` 符号，比如 `$'abc\ndef'`。

### `=~` 的正则表达式

`[[ '-' =~ [._-] ]]` 是 true，但是 `[[ '-' =~ [._-a-zA-Z0-9] ]]` 是 false。

因为正则表达式里的 `-`，如果不是第一个或者最后一个字符，或者没有写成转义的 `\-`，那 `-` 会被当成 range 的连字符。
所以要写成 `[[ '-' =~ [-._a-zA-Z0-9] ]]` 或 `[[ '-' =~ [._a-zA-Z0-9-] ]]` 才是 true。

但写成 `[[ '-' =~ [._\-a-zA-Z0-9] ]]` 依然会失败，因为 bash 的正则解析貌似不支持这样写，暂时未找到解释。

### BASH 的 PS1/PS2/PS3/PS4

> Bash 有四个可以定制的提示符:
>
> PS1 是在每个命令前都显示的主要提示符，大部分用户都是定制这个值。
> PS2 命令需要输入时的第二提示符(比如多行命令).
> PS3 不常用，Bash　的内置 select 显示交互菜单时使用. 和其它提示符不一样，它不扩展 Bash escape sequences. 通常在使用包含 select 的脚本时会需要定制此提示符。
> PS4 也不常用，在调试　bash 脚本时显示缩进级别。第一个字符的重复次数表示缩进级别。

https://wiki.archlinux.org/index.php/Bash/Prompt_customization_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)


### BASH PS1 需要包裹在 \[ \] 里

> Note: Wrapping the tput output in \[ \] is recommended by the Bash man page. This helps Bash ignore non-printable characters so that it correctly calculates the size of the prompt.

https://wiki.archlinux.org/index.php/Bash/Prompt_customization_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)

如果没写 \[ \]，按 `ctrl-u` 清空当前行会显示多余的字符。

### 目录是可执行的

> Execute allows you to enter it and access files (or other directories) inside.

答案见 https://superuser.com/a/168583
真是有趣。

### 获得字符的转义码

先按 `ctrl-v` 再按想转义的字符，就会输出到终端上，支持组合键。
在 vim 中也有效。

### 使用 bind 改变键盘字符的触发效果

https://blog.libthomas.org/calendar/2015/01/19/22.html
https://www.computerhope.com/unix/bash/bind.htm

用 bind 感觉可以做很有趣的事。

### 用 ANSI Escape Code 改变 Shell 文字样式

改变 Shell 文字样式，本质上就是用 ANSI Escape Code 来改变终端模拟器的行为，可以做到很多事，比如改变文字颜色，文字闪烁，改变鼠标位置，清屏等等。比如执行 echo -e '\e[2J' 来清屏，或者 echo -e '\e[2J\e[u' 清屏并重置鼠标位置（跟 ctrl-l 同样效果）。这也跟 tput 命令是异曲同工的。

- [Wikipedia - ANSI escape code](https://www.wikiwand.com/en/ANSI_escape_code)
- [Stackoverflow - List of ANSI color escape sequences](https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences)
- [FLOZz' MISC ? bash:tip_colors_and_formatting](https://misc.flogisoft.com/bash/tip_colors_and_formatting)
- [ASCII Table - ANSI Escape sequences](http://ascii-table.com/ansi-escape-sequences.php)
- [ansi codes](https://bluesock.org/~willkg/dev/ansi.html#sequences)
- [vt100.net - ANSI Control Functions Summary](https://vt100.net/docs/vt510-rm/chapter4.html)
- [JAFROG'S DEV BLOG - Colors In Terminal](http://jafrog.com/2013/11/23/colors-in-terminal.html)

https://www.v2ex.com/t/573838
