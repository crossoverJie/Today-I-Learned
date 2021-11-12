## 永久链接

互联网没有永久存在的资源，终有一天你会发现原来的资源内容改变，甚至消失。
最可以信赖的只有 archived 服务。这类服务在自身存活的时间内，永久保存网页当时的内容快照。

### 推荐服务

#### https://archive.org/

保存的页面来自用户提交的和自动抓取的。

优点：

1. 资金稳定，所以该服务的存活时间最稳定

缺点：

1. 生成的链接长度很长
2. 阅读体验不够好

#### https://archive.today/

曾经的 [archive.is](https://www.wikiwand.com/zh/Archive.is)，现在的 Archive.today。

保存的页面只来自用户提交的，不自动抓取。

优点：

1. 生成短链接
2. 阅读体验不错
3. 支持通配符来批量保存页面
4. hash tag 支持滚动百分比以及任意位置的引用

缺点：

1. 私人资助，服务器在法国，因此可能不稳定

它还有其他几个域名，都指向同一个服务。

- https://archive.ph/
- https://archive.is/
- https://archive.md/

#### https://perma.cc/

一个比较新的 archived 服务。界面很友好。只是不知道稳不稳定

### 快捷使用

不需要安装浏览器插件，只需要创建浏览器书签。

#### 查询用书签

链接地址填 `javascript:void(open('http://archive.ph/'+encodeURIComponent(document.location)))`

点击书签即可在 Archive.today 查询当前页面的记录。

#### 保存用书签

链接地址填 `javascript:void(open('http://archive.ph/?run=1&url='+encodeURIComponent(document.location)))`

点击书签即可将当前页面保存到 Archive.today。

### 参考文章

- [留下证据：如何存档开源材料？](https://archive.ph/yuVm7)
- [个人博客存入互联网博物馆Archive.org](https://archive.ph/9fgTy)
