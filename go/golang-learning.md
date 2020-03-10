## Golang 学习

### 配置 Golang 开发环境

1. 安装 [gvm](https://github.com/moovweb/gvm)
1. `gvm listall` 查看可用版本
1. `gvm install $version -B` 安装二进制版本，这样比较快
1. `gvm use $version --default`
1. 设定 GOPATH
1. 配置代理，https://goproxy.io/ 或者 https://goproxy.cn/
1. 重启 shell
1. `go env` 确认 Go 环境变量
1. 安装 shell 补全工具，https://github.com/posener/complete/tree/master
1. 重启 shell
1. 安装 [gopls](https://github.com/golang/tools/blob/master/gopls/doc/user.md#installation)
1. 安装 [gotags](https://github.com/jstemmer/gotags)
1. 配置你的编辑器
