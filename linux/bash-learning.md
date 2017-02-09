## Bash 小知识

### TOC

<!-- MarkdownTOC GFM -->

- [man bash](#man-bash)
- [kill %jobspec](#kill-jobspec)
- [<Tab> 补全文件路径开启颜色](#tab-补全文件路径开启颜色)
- [bash-completion](#bash-completion)
- [PS1 等提示符的定义](#ps1-等提示符的定义)
- [右侧打印](#右侧打印)
- [打印所有 bash options (set -o 或 shopt)](#打印所有-bash-options-set--o-或-shopt)
- [提取一句话的第一个单词](#提取一句话的第一个单词)
- [/usr/libexec/path_helper](#usrlibexecpath_helper)

<!-- /MarkdownTOC -->

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
