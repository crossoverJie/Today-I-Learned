## 重定向 window.location 是异步的

发现 window.location.href = url，不会立即跳转，而是会把剩下的 js 代码都加载完后才跳转页面。interesting

[window.location.href跳转页面详细过程是怎么样的？](https://www.zhihu.com/question/29890952/answer/207444783)
