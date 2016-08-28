## 在 vim 中执行 shell 命令，同时将结果输出到 buffer

- `!` 执行 shell 命令
- `:r!` 读取 shell 命令结果到当前 buffer 中
- `:tabnew | r!` 读取 shell 命令结果到新的 tab
- `:new | r! ` 新的 window
- `:vnew | r!` 新的垂直 window
