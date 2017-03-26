## 学习 Vim

先看完 [vim-galore](https://github.com/mhinz/vim-galore)

### TOC

<!-- MarkdownTOC depth=2 GFM -->

- [概念](#概念)
- [Cheatsheets](#cheatsheets)
- [调试](#调试)
- [技巧](#技巧)
    - [搜索时使用正则匹配单词边界。](#搜索时使用正则匹配单词边界)
    - [改变字符大小写](#改变字符大小写)
    - [swap 文件](#swap-文件)
    - [`[]`,`{}`,`""`,`''` 快速操作](#-快速操作)
- [等号，缩进对齐](#等号缩进对齐)
    - [:g 和 :v 和 :p 命令](#g-和-v-和-p-命令)
- [单词边界](#单词边界)
- [在 vim 里直接打开连接](#在-vim-里直接打开连接)

<!-- /MarkdownTOC -->

### 概念

- normal、insert、visual 等模式
- window、pane、buffer
- set、let、command

### Cheatsheets

![](http://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png)
翻译版：
![](http://blog.vgod.tw.s3.amazonaws.com/wp-content/uploads/2009/12/vim-cheat-sheet-full.png)

![](https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png)

![](http://michael.peopleofhonoronly.com/vim/vim_cheat_sheet_for_programmers_print.png)

> which from http://michael.peopleofhonoronly.com/vim/

https://vim.rtorr.com/lang/zh_tw/


### 调试
`vim --startuptime timefile <文件名>` 调试 vim 启动各阶段所用时间。

`awk '{if ($2 > 100 && NR > 6) print $2, $(NF-1), $NF, NR}' timefile | sort -r`  查看占用时间 >100ms 的步骤

实时分析:

```vim
:profile start profile.log
:profile func *
:profile file *
" At this point do slow actions
:profile pause
:noautocmd qall!
```

### 技巧

#### 搜索时使用正则匹配单词边界。

比如 `/the\b` 会匹配到 `the`，也会匹配到 `then`。
应该使用 `/the\>` 来匹配。因为 `\b` 在 vim 的正则里是无效的，使用 `\<` 和 `\>` 代替。

默认的 `*` 和 `#` 是匹配边界的，`g*` 和 `g#` 不匹配边界。

[参考](http://stackoverflow.com/questions/8404349/in-vim-how-do-you-search-for-a-word-boundary-character-like-the-b-in-regexp)

#### 改变字符大小写

使用 `~` 或者 `vu`、`vU`

[参考](http://vim.wikia.com/wiki/Switching_case_of_characters)

#### swap 文件

|    命令   |          描述          |
|:---------:|:----------------------:|
| :preserve |   保存修改到交换文件   |
|  :recover |     从交换文件恢复     |
| :swapname | 查看当前交换文件的名称 |

#### `[]`,`{}`,`""`,`''` 快速操作

vim documentation 有两个章节：[object-motions][] 和 [object-select][]。非常有用。

[object-motions]: http://vimdoc.sourceforge.net/htmldoc/motion.html#object-motions
[object-select]: http://vimdoc.sourceforge.net/htmldoc/motion.html#object-select

### 等号，缩进对齐

#### :g 和 :v 和 :p 命令

`:[range]g[lobal]/{pattern}/[cmd]` 正则匹配到的行执行命令

`:[range]v[global]/{pattern}/[cmd]` Same as :g!

`:[range]p[rint] {count} [flags]` 输出行到 Ex 栏

使用方法

- 删除空白行 `:g/^$/d`
- 删除以#号开头的行 `:g/^#/d`
- 查询输出当前文件内所有匹配正则的行 `:g/regex/`

### 单词边界

使用 `iskeyword` 来改变单词边界的定义。用来改变 motion。

例如 `autocmd BufRead *.js set isk-=.`，针对所有 js 文件，将 `.` 排除出去

### 在 vim 里直接打开连接

鼠标移到链接上，按键 `gx` 即可。  
`:h gx` 查看帮助

但是 gx 无法打开完整的链接，比如 https://www.youtube.com/watch?v=wlR5gYd6um0  
[open-browser.vim](https://github.com/tyru/open-browser.vim) 可以解决这个问题

`netrw_filehandler` 可以用来扩展 gx 的解析。
