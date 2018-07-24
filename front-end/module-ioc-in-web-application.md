## 前端工程的模块控制反转

有一篇非常棒的文章 《[Designing very large (JavaScript) applications][B1]》提出了「Enhance」这个概念。
实现去中心化模块加载。

![](https://cdn-images-1.medium.com/max/1600/1*Y9AgFj90bpFsKq6e7o7Jbw.png)
> 图出自 [Medium][B1]

![](https://cdn-images-1.medium.com/max/1600/1*bDH4yzG0mrrYlrs2C9twsA.png)
> 图出自 [Medium][B1]


它实际上就是控制反转。在服务端工程很容易实现，比如服务启动时扫描文件目录，自动载入对应的文件，以代替人为书写模块路径加载的代码。
在现代的前端技术栈实现这个，可以有两种方法：

1. 在编译时，触发一个脚本，比如写个 shell 脚本，`grep` 出所有 require 或 import 某个核心文件路径的所有文件，然后把这些文件路径写到入口函数里。
2. 利用 webpack 的 [require.context](https://webpack.js.org/guides/dependency-management/#require-context)。
    - 目前看来只有 webpack 编译工具支持，像 [parcel](https://parceljs.org) 就没有提供类似接口。

[B1]: https://medium.com/@cramforce/designing-very-large-javascript-applications-6e013a3291a3

