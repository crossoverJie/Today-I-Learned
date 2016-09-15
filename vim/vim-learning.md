## 学习 Vim

先看完 [vim-galore](https://github.com/mhinz/vim-galore)

### 概念

- normal、insert、visual 等模式
- window、pane、buffer
- set、let、command

### Cheatsheets

![](http://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png)
翻译版：
![](http://blog.vgod.tw.s3.amazonaws.com/wp-content/uploads/2009/12/vim-cheat-sheet-full.png)

![](https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png)


### 调试
`vim --startuptime timefile <文件名>` 调试 vim 启动各阶段所用时间。

实时分析:

```
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
