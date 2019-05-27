# 今天我学了什么 (Today I learned)

> 博观而约取，厚积而薄发。

## 反馈问题或建议

本项目不接受 Pull Request，如果你有什么好的想法，或者改进的建议，请使用 [Issue][] 与我探讨。

建议 Watch 或 Star 本项目。但不要 Fork，这没有意义。

[Issue]: https://github.com/adoyle-h/Today-I-Learned/issues


## 版权声明

Copyright (c) 2016-2019 ADoyle. The project is licensed under the **BSD 3-clause License**.

See the [LICENSE][] file for the specific language governing permissions and limitations under the License.

[LICENSE]: ./LICENSE


## TOC

<!-- toc -->
<details>
  <summary>目录</summary>

  <ul>
    <li>
      <a href="#%E6%95%B0%E6%8D%AE%E5%BA%93">数据库</a>
      <ul>
        <li><a href="#etcd">Etcd</a></li>
        <li><a href="#mongo">Mongo</a></li>
        <li><a href="#mysql">Mysql</a></li>
      </ul>
    </li>
    <li><a href="#%E8%AE%BE%E8%AE%A1">设计</a></li>
    <li><a href="#docker">Docker</a></li>
    <li><a href="#elixir">Elixir</a></li>
    <li><a href="#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B">函数式编程</a></li>
    <li>
      <a href="#%E5%89%8D%E7%AB%AF">前端</a>
      <ul>
        <li><a href="#react">React</a></li>
      </ul>
    </li>
    <li><a href="#git">Git</a></li>
    <li><a href="#javascript">Javascript</a></li>
    <li><a href="#linux">Linux</a></li>
    <li><a href="#mac">Mac</a></li>
    <li><a href="#nodejs">Nodejs</a></li>
    <li><a href="#%E8%BF%90%E7%BB%B4">运维</a></li>
    <li><a href="#%E5%85%B6%E4%BB%96">其他</a></li>
    <li><a href="#racket">Racket</a></li>
    <li><a href="#redis">Redis</a></li>
    <li><a href="#ruby">Ruby</a></li>
    <li><a href="#%E6%80%9D%E8%80%83">思考</a></li>
    <li><a href="#typescript">Typescript</a></li>
    <li><a href="#vim">Vim</a></li>
    <li><a href="#web">Web</a></li>
  </ul>

</details>
<!-- tocstop -->

## 数据库

- [flyway 用法](database/flyway-usage.md)

### Etcd

- [ETCD 报错 request ignored (cluster ID mismatch)](database/etcd/request-ignored-cluster-id-mismatch.md)

### Mongo

- [MongoDB 的丢数据问题](database/mongo/data-lost.md)

### Mysql

- [连接 MYSQL 显示中文](database/mysql/encoding-in-connection.md)
- [mysqldump](database/mysql/mysqldump.md)
- [Date/Datetime/Timestamp 比较](database/mysql/timestamp-vs-datetime.md)
- [Transaction 与 autocommit](database/mysql/transaction-and-autocommit.md)

## 设计

- [8 点栅格](design/8-point-grid.md)
- [色彩空间](design/color-space.md)
- [UI 的加载状态](design/loading-status-of-ui.md)
- [OpenType](design/opentype.md)
- [使用 sketchtool 操作 sketch 文档：diff 以及其他功能](design/sketchtool-for-diff.md)
- [排版](design/topography.md)

## Docker

- [docker-compose 启动容器顺序](docker/docker-compose-startup-order.md)
- [进入 docker for mac 的虚拟机](docker/docker-for-mac-tty.md)
- [学习 Docker](docker/docker-learning.md)
- [docker 小技巧](docker/docker-tricks.md)
- [修正 Docker for mac 时区问题](docker/fix-timezone-in-docker-for-mac.md)
- [在后台运行 docker 容器且不会自动退出](docker/run-docker-in-background.md)
- [volume](docker/volume.md)

## Elixir

- [tuple 与 list 的选择](elixir/choosing-between-tuple-and-list.md)
- [尾递归优化](elixir/tail-call-optimization.md)

## 函数式编程

- [Cache-Control](fp/cache-control.md)
- [chrome 开发者工具观察响应 Failed to load response data](fp/chrome-dev-tool-failed-to-inspect-response.md)
- [重定向 window.location 是异步的](fp/redirect-location-is-async.md)
- [什么是 Monad](fp/what-is-monad.md)

## 前端

- [SSR (Server Side Render)](front-end/SSR.md)
- [关于 webpack 2](front-end/all-about-webpack-2.md)
- [`<script async>` 与 `<script defer>`](front-end/async-defer-script-dom.md)
- [圆角的玩法](front-end/border-radius-tricks.md)
- [代码分离](front-end/code-split.md)
- [颜色对比度](front-end/color-contrast.md)
- [编译前端 JS 库](front-end/compile-js-library.md)
- [contentEditable](front-end/contentEditable.md)
- [CORS](front-end/cors.md)
- [css-modules vs css-in-js](front-end/css-modules-vs-css-in-js.md)
- [开发一个油猴 (Tampermonkey) 脚本](front-end/develop-a-tampermonkey-script.md)
- [前端类库打包的注意点](front-end/fe-library-bundle.md)
- [XMLHttpRequest 的继承者：Fetch](front-end/fetch.md)
- [浮动侧边栏](front-end/float-sidebar.md)
- [Functional CSS](front-end/functional-css.md)
- [307 Internal Redirect 与浏览器的 HSTS 功能](front-end/hsts-307.md)
- [HTTP 缓存机制](front-end/http-cache.md)
- [学习 Chrome DevTools](front-end/learning-chrome-dev-tools.md)
- [前端工程的模块控制反转](front-end/module-ioc-in-web-application.md)
- [redux 入门](front-end/redux-ABC.md)
- [Rollup Dynamic Import](front-end/rollup-dynamic-import.md)
- [script 和 link 标签的事件属性](front-end/script-link-event.md)
- [Mac 浏览器中显示滚动条](front-end/show-scroball-in-mac.md)
- [状态机与状态图](front-end/state-machine-and-statecharts.md)
- [媒体查询的断点设置](front-end/the-breakpoint-in-media-query.md)
- [使用 browserify 和 uglifyjs](front-end/using-browserify-and-uglifyjs.md)
- [wasm](front-end/wasm.md)
- [Webkit 浏览器渲染效率](front-end/webkit-render-performance.md)
- [webpack 配置为数组](front-end/webpack-config-is-an-array.md)
- [webpack 配置](front-end/webpack-config.md)
- [Webpack Dynamic Import](front-end/webpack-dynamic-import.md)
- [奇怪的 parse html](front-end/weird-parse-html.md)
- [富文本编辑器选型](front-end/wysiwyg-editor.md)
- [z-index](front-end/z-index.md)

### React

- [使用 jquery 改变 React 的 input DOM](front-end/react/change-react-input-dom-via-jquery.md)
- [组件生命周期](front-end/react/component-lifecycle.md)
- [Compound Components](front-end/react/compound-components.md)
- [不要在 render 里直接定义 ref callback](front-end/react/dont-define-ref-callback-in-render.md)
- [ref callback 何时触发？](front-end/react/when-ref-callback-get-invoked.md)

## Git

- [用 shell 脚本查询 git commit hash](git/a-shell-script-to-get-current-commit-hash.md)
- [Git Diff](git/diff.md)
- [Git 学习资料](git/git-books.md)
- [git ssh 代理](git/git-ssh-proxy.md)
- [git credentials](git/gitcredentials.md)
- [忽略 Git submodule](git/ignore-git-submodule.md)

## Javascript

- [babel 小技巧](javascript/babel-tricks.md)
- [JavaScript 中的相等性判断](javascript/equality-comparisons.md)
- [为什么 eval('{}') 返回 undefined ？](javascript/eval-empty-bracket.md)
- [JS 的 fiber 技术](javascript/fiber-in-js.md)
- [lodash 陷阱](javascript/lodash-trips.md)
- [Javascript Proxy](javascript/proxy.md)
- [JS 保留字](javascript/reserved-words.md)
- [尾递归优化](javascript/tail-call-optimization.md)
- [Promise 的坑](javascript/trap-of-promise.md)
- [使用 Promise 的技巧](javascript/trick-of-promise.md)
- [JS 编程技巧](javascript/tricks-of-js.md)

## Linux

- [XDG 基础目录标准](linux/XDG-base-directory-spec.md)
- [ab 与 wrk 比较](linux/ab-vs-wrk.md)
- [用户线程，内核线程，CPU 超线程技术](linux/about-multi-thread.md)
- [Alfred 找不到文件](linux/alfred-cannot-find-files.md)
- [ansible 部署到 centos7 时，不能找到 service](linux/ansible-deploy-fault-with-centos7-and-service.md)
- [bash error exit](linux/bash-error-exit.md)
- [bash 开启 vi 模式](linux/bash-in-vi-mode.md)
- [学习 Bash](linux/bash-learning.md)
- [Bash 小技巧](linux/bash-tricks.md)
- [linux 命令被 hash 缓存](linux/command-be-hashed.md)
- [compgen](linux/compgen.md)
- [连接 tty](linux/connect-tty.md)
- [判断文件编码](linux/detect-encoding-of-file.md)
- [编辑二进制文件](linux/edit-binary-file.md)
- [用环境变量替换文本内容 envsubst](linux/envsubst.md)
- [快速创建大文件](linux/fast-generate-large-file.md)
- [快速删文件](linux/fast-remove-files.md)
- [文件描述符，open file table 与 inode](linux/fd-oft-inode.md)
- [file 命令](linux/file-command.md)
- [hash 命令](linux/hash-command.md)
- [Here Strings and Here Documents](linux/here-strings-and-here-documents.md)
- [Hostname in Linux](linux/hostname.md)
- [查看进程的环境变量](linux/inspect-process-environment.md)
- [调用原生 shell 命令](linux/invoke-origin-shell-command-with-backslash.md)
- [IO、select、epoll](linux/io-select-epoll.md)
- [ip 与 ifconfig 命令](linux/ip-vs-ifconfig.md)
- [sudo bash -c 'su - root'](linux/login-use-root.md)
- [命令行中的乱码](linux/messy-codes-in-console.md)
- [创建临时文件的命令](linux/mktemp.md)
- [管道重定向](linux/pipe-redirect.md)
- [慎用双引号与单引号](linux/quotes-in-bash.md)
- [命令行中提示用户 Yes/No](linux/read-prompt.md)
- [在 alpine 中找不到 setup-apkcache 等 setup-* 命令](linux/setup-scripts-in-alpine.md)
- [shebang](linux/shebang.md)
- [拆分与合并文件](linux/split-and-merge-file.md)
- [sudo, gksudo, kdesudo](linux/sudo-and-gui-sudo.md)
- [tailf](linux/tailf.md)
- [unlink 是删除任何文件](linux/unlink.md)
- [/usr/bin/env](linux/usr-bin-env.md)
- [奇怪的 ESC](linux/weird-esc-key.md)
- [监听 0.0.0.0 与 127.0.0.1 的区别](linux/whats-the-difference-between-ip-address-0-0-0-0-and-127-0-0-1.md)

## Mac

- [Mac 的 DNS 问题](mac/dns-troubles-in-mac.md)
- [Mac 下按住键盘不能输出重复的字符](mac/hold-down-key-cannot-keep-print-character.md)

## Nodejs

- [命令行的工具和类库](nodejs/cli-libraries-and-tools.md)
- [不要对函数参数重新赋值](nodejs/don-t-reassign-function-arguments.md)
- [EJS 渲染引擎的空白问题](nodejs/ejs-blanks.md)
- [Error.captureStackTrace 的 stack 缺少 message 问题](nodejs/error-captureStackTrace.md)
- [node 中发 ICMP 包](nodejs/icmp-in-node.md)
- [npm publish 不会包含 .gitignore 文件](nodejs/missing-gitignore-when-node-publish.md)
- [npm 命令](nodejs/npm-commands.md)
- [npm run scripts](nodejs/npm-run-scripts.md)
- [nvm 不是一个可执行文件，而是一个函数](nodejs/nvm-is-not-a-executable-but-a-function.md)
- [调整 rejectUnauthorized 选项来容许 https 证书无效](nodejs/rejectUnauthorized-of-https.md)
- [require 路径名大小写问题](nodejs/require-typo.md)
- [流 (stream)](nodejs/stream.md)
- [EventEmitter 需要注意的三个地方](nodejs/three-notes-of-eventemitter.md)
- [Yarn 用法](nodejs/yarn-usage.md)

## 运维

- [运维小技巧](ops/ops-tricks.md)

## 其他

- [0.30000000000000004](others/0.30000000000000004.md)
- [Today I learned (TIL) 资源列表](others/TIL.md)
- [Alfred Workflow debug 技巧](others/alfred-workflow-debug.md)
- [Github Markdown 中的锚点引用](others/anchor-in-github-markdown.md)
- [备份 homebrew](others/backup-brew.md)
- [Chrome 小技巧](others/chrome-tricks.md)
- [Mac 文件系统的剪切快捷键](others/cut-in-mac-file-system.md)
- [文件命名，下划线还是中划线？](others/file-naming-with-underscores-and-dashes.md)
- [github 中 markdown 折叠文本](others/fold-text-in-github.md)
- [从微信公众号提取原图](others/get-raw-image-from-weixin.md)
- [通过 Hash 密码到 url 来验证密码](others/hashed-password-to-url.md)
- [Homebrew 使用代理和镜像源加速下载](others/homebrew-proxy-and-mirror.md)
- [如何阅读标准](others/how-to-read-spec.md)
- [如何审核代码](others/how-to-review-code.md)
- [如何在 github 项目里搜索代码](others/how-to-use-github-to-browse-codes.md)
- [Hyper.js 中文问题](others/hyper-js-chinese-problems.md)
- [箴言](others/maxim.md)
- [在 Github Markdown 中如何填写图片的链接](others/relative-link-in-github-markdown.md)
- [Markdown 里写反引号](others/reverse-quote-in-markdown.md)
- [Semver](others/semver.md)
- [mac 里的 tmux 内无法用 sublime 打开文件](others/subl-in-tmux-on-mac.md)
- [vim textwidth=78 的约定](others/textwidth-78-of-vim.md)
- [zookeeper 健康检查](others/zookeeper-health-check.md)

## Racket

- [学习 Racket](racket/racket-learning.md)

## Redis

- [Redis Cluster](redis/cluster.md)
- [拷贝一个 Sorted Set 到新的 key](redis/copy-a-sorted-set.md)

## Ruby

- [使用 scientist 科学重构代码](ruby/using-scientist-for-refactoring.md)

## 思考

- [项目代码如何组织](thinking/how-to-make-code-organization.md)
- [如何编程](thinking/how-to-programming.md)
- [不完整的函数](thinking/non-total-function.md)
- [提问的智慧](thinking/smartquestion.md)

## Typescript

- [export default 的类型注明](typescript/type-annotations-for-export-default.md)
- [Typescript 与 Rollup](typescript/typescript-and-rollup.md)
- [typescript 的缺点](typescript/typescript-cons.md)

## Vim

- [学习 Neovim](vim/neovim-learning.md)
- [在 vim 中执行 shell 命令，同时将结果输出到 buffer](vim/pipe-shell-output-to-buffer.md)
- [vim 插件教程](vim/plugins-tutorial.md)
- [在 vim 中运行终端，以及如何退出终端模式](vim/run-terminal-in-vim.md)
- [学习 Vim](vim/vim-learning.md)
- [VIM 搜索技巧](vim/vim-search-tips.md)

## Web

- [URL QueryString 传数组参数](web/array-params-in-url.md)
- [国际化 SEO](web/international-SEO.md)
- [下划线在 HTTP Header 里是非法字符串](web/underscore-is-invalid-in-header.md)
- [URI 转义](web/uri-encode.md)


**[⬆ 返回目录](#toc)**
