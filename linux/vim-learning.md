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


## 调试
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

