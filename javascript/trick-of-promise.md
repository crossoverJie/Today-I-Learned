## 使用 Promise 的技巧

### 如何在链式处理中访问之前的 promise 返回的值？

有两种方法：

1. [break the chain](http://stackoverflow.com/a/28250704/4622308)
2. [bluebird .bind function](http://bluebirdjs.com/docs/api/promise.bind.html)

### 监听未 catch 的 promise，以防 silent fail

参加[这篇文章](http://adoyle.me/blog/silent-fail-in-promise.html)

