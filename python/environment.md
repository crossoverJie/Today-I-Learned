## python 环境配置

![](https://opensource.com/sites/default/files/uploads/python_environment_xkcd.png)

python 路径注意：

- 系统自带的 python
- 系统包管理器安装的 python
- 用 pyenv 安装的 python
- 源码安装的 python
- 虚拟环境的 python

pip 路径注意：

- pip install
- pip install --user

### Python 多版本安装和管理

一般来说 [pyenv][] 的用户是 python 开发者。一般用户只要用系统包管理器装 python2 和 python3 就够了，因为 python 版本比较稳定，没必要用 pyenv。

### 虚拟环境

https://zhuanlan.zhihu.com/p/81568689

如果你使用 Python 2，那就只能选择 [virtualenv][]，你需要额外安装它。

[venv][] 是 [virtualenv][] 的子集，从 Python 3.3 起，被集成到 Python 标准库中。意味着 Python 3.2 以下的都用不来 venv。且 venv 有缺点，详见 [virtualenv][] 文档。总结，直接用 virtualenv。

### pipx

[pipx](https://github.com/pipxproject/pipx/) 用来在隔离环境中安装和运行 Python 应用程序。

### pip

通常使用 pip 安装依赖时，会加上 `--user` 参数，例如 `pip3 install --user pipx`。
这是因为 pip 默认将 python 包装在 python 所在路径下，一般为系统路径，需要 root 权限。
加上 `--user` 参数会安装在当前用户的路径下。

> site.USER_SITE
> Path to the user site-packages for the running Python. Can be None if getusersitepackages() hasn’t been called yet. Default value is ~/.local/lib/pythonX.Y/site-packages for UNIX and non-framework Mac OS X builds, ~/Library/Python/X.Y/lib/python/site-packages for Mac framework builds, and %APPDATA%\Python\PythonXY\site-packages on Windows. This directory is a site directory, which means that .pth files in it will be processed.

参考，

- https://stackoverflow.com/a/42989020/4622308
- https://stackoverflow.com/a/54065289/4622308

### 参考文章

- [The right and wrong way to set Python 3 as default on a Mac](https://opensource.com/article/19/5/python-3-default-mac)

<!-- links -->

[pyenv]: https://github.com/pyenv/pyenv
[virtualenv]: https://virtualenv.pypa.io/en/latest/
[venv]: https://docs.python.org/3/library/venv.html
