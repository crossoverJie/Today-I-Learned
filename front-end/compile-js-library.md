## 编译前端 JS 库

### package.json 的 main 和输出格式

作为应用，编译一个 UMD 模块就够了，因为不会被其他项目依赖。

作为类库，应该至少提供以下三种模块。

```
{
  ...
  "main": "dist/eat-fruit.cjs.js",
  "browser": "dist/eat-fruit.umd.js",
  "module": "dist/eat-fruit.es.js",
  ...
}
```

- main: CommonJS 模块。Node 加载场景。
- browser: UMD 模块。提供浏览器 `<script>` 加载。
- module: ES Module。Rollup 和 Webpack 加载用。

参考[这篇文章](https://bagja.net/blog/bundling-your-javascript-library-with-rollup.html#different-output-format-different-minimum-environments)。

如果读的是 UMD 的包，Rollup 可能无法解析 UMD 模块的 export，会报 [name is not exported by module](https://rollupjs.org/guide/en#error-name-is-not-exported-by-module-) 的错误。
