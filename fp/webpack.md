## webpack

### Dynamic import for code split

必须要使用 [Syntax Dynamic Import Babel 插件](https://babeljs.io/docs/plugins/syntax-dynamic-import/) 才会生效。

### Dynamic import chunk name

在 import 函数中使用 `/* webpackChunkName: 'name' */` 注释，最后生成的 chunk 文件不会以 id 命名，而会以 name 命名。

```jsx
<Route path="/" exact component={lazyLoad(() => import(/* webpackChunkName: 'home' */ './pages/home'))} />
```

lazyLoad 是我实现的高阶组件。
