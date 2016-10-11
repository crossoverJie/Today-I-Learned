## npm run scripts

主要参考[阮一峰的教程](http://javascript.ruanyifeng.com/nodejs/npm.html#toc12)

### 环境变量

> npm run 命令会自动在环境变量 $PATH 添加 node_modules/.bin 目录

### -s 参数

> npm run本身有一个参数-s，表示关闭npm本身的输出，只输出脚本产生的结果。

### 传参

命令后面加上 `--` 来传递自定义的参数。

比如 `npm run test -- anothertest.js`

### npm-run-all

[npm-run-all][] 可以同时并行和串行执行 npm 脚本。

- `npm-run-all clean lint build:*`
- `npm-run-all --parallel watch:*`

[npm-run-all]: https://github.com/mysticatea/npm-run-all
