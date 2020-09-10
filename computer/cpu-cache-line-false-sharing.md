## CPU 伪共享 (CPU Cache Line False Sharing)

也称 Cache Line Bouncing。

### 检测方法

`perf c2c` 命令。详见[这篇文章][1]

### 解决方案

缓存行填充（也称缓存行对齐）。增加无意义的变量声明，增加冗余空间来填充到一个 Cache Line 的长度。
Java 提供了 `@sun.misc.Contended` 注解来自动填充。

### 参考资料

- [杂谈 什么是伪共享（false sharing）？](https://zhuanlan.zhihu.com/p/65394173)
- [Cache False Sharing Debug][1]


[1]: http://oliveryang.net/2018/01/cache-false-sharing-debug/
