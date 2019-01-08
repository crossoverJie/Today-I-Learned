## URI 转义

1994 年提出的 RFC1738 定义了 URI 最初的规范，1998 年提出的 RFC2396 有较为完整的规范，2005 年提出的 RFC3986 最终成为主流规范。
其过程对保留字的定义等有所改变，所以存在历史的变（包）迁（袱）。

详见：https://www.wikiwand.com/zh-tw/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E6%A0%87%E5%BF%97%E7%AC%A6#/%E6%A0%87%E5%87%86%E6%94%B9%E8%89%AF

很多语言的标准库是基于 RFC2396 实现的，比如 JS 的 encodeURI 和 encodeURIComponent。
具体见 https://tc39.github.io/ecma262/#sec-uri-syntax-and-semantics

```js
// 改成 RFC3986 规范
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}
```
