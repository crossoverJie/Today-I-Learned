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

因为 `[._-a-zA-Z0-9]` 是无效正则，`[._-]` 和 `[a-zA-Z0-9]` 是有效的，
所以 `[[ '-' =~ [._-a-zA-Z0-9] ]]` 只能写成 `[[ '-' =~ [._-] ]] || [[ '-' =~ [a-zA-Z0-9] ]]`。
