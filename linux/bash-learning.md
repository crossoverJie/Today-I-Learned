## 学习 Bash

### 学习资料

必读:

- [gnu.org/software/bash/manual/](https://www.gnu.org/software/bash/manual/)

扩展阅读:

- [The Bash Hackers Wiki](http://wiki.bash-hackers.org/)
- [kfirlavi.com/blog/2012/11/14/defensive-bash-programming/](http://www.kfirlavi.com/blog/2012/11/14/defensive-bash-programming/)
- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
- [Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)
- http://guide.bash.academy/ : 虽然未写完，但看起来不错，值得关注
- [Bash changes](http://wiki.bash-hackers.org/scripting/bashchanges)

### 工具

- 形象解释shell 命令：[explainshell.com/](https://explainshell.com/)

### Snippets

- https://github.com/alexanderepstein/Bash-Snippets

### 静态检查

- [github.com/koalaman/shellcheck](https://github.com/koalaman/shellcheck)

### Bash script 的缺点

- 没有文件内的私有变量的概念，`source` 加载文件必须非常谨慎，容易导致变量被修改。
