## Bash 的坑

### nameref 的命名冲突

nameref 不只是传参和接收参数的变量不能同名。
在同一个函数作用域里的其他变量也不能同名，参考下面的代码。

https://gist.github.com/4b1b09325b64c72844ea9112cad650fc#file-1-bash

### VAR=VALUE command 的异常行为

我原先一直以为 `VAR=VALUE` 是只针对当前行生效的，不会在全局生效。实际上会根据 `command` 不同而产生不同的效果。

比如[这个例子]( https://gist.github.com/adoyle-h/ff0a94256489de643c6dade391c969ba)。

原因参考这两个

- https://unix.stackexchange.com/a/264642
- https://unix.stackexchange.com/a/458901
