## Homebrew

### brew update 慢的问题

`brew update --verbose` 看慢在哪里。

### 备份 Homebrew

缅怀已弃用的 [homebrew-backup](https://github.com/rstacruz/homebrew-backup)

现在可以使用官方的 [homebrew-bundle](https://github.com/Homebrew/homebrew-bundle)

执行 `brew bundle dump` 会生成 `Brewfile` 文件。

### 使用 Homebrew 镜像

- Homebrew 镜像: https://lug.ustc.edu.cn/wiki/mirrors/help/brew.git
- Homebrew Bottles 镜像: https://lug.ustc.edu.cn/wiki/mirrors/help/homebrew-bottles
- Homebrew Cask 镜像: https://mirrors.ustc.edu.cn/help/homebrew-cask.git.html

### 使用 ALL_PROXY 代理

例如使用 shadowsocks 的 socks5 代理，端口号为 1080，在终端运行：

`ALL_PROXY=socks5://127.0.0.1:1080 brew install ...`
