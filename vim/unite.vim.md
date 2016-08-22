## unite.vim

### file_rec/async 因为没有刷新缓存而找不到文件

两种解决方案：

1. 在 unite 面板中按 `ctrl-l` 来刷新缓存
2. 使用 `-force-redaw` 参数来强制刷新缓存，比如 `nnoremap <leader>t :<C-u>Unite -no-split -buffer-name=files   -start-insert -force-redraw file_rec/async:\`projectroot#guess()\` <cr>`

参考这个 [issue 的答案](https://github.com/Shougo/unite.vim/issues/930#issuecomment-220190238)。
