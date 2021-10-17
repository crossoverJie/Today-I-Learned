## Virtualbox

### 开启网络访问

默认虚拟机的网络配置是 NAT。如果虚拟机里访问不了外网，可能是 ifcfg 配置不对。查看 /etc/sysconfig/network-scripts/ifcfg-en 开头的文件，把 ONBOOT 的值改成 yes，然后 `service network restart` 即可。

### 开启共享粘贴板

共享粘贴板只支持 GUI 环境，**不支持终端环境**。终端环境的解决方案只有虚拟机里开一个 sshd，在宿主机 ssh 进去，即在宿主机环境操作。

1. 启动虚拟机后，在菜单栏-设备-共享粘贴板，选择「双向」。
2. 点击菜单栏-设备-安装增强功能。

如果安装增强功能失败，显示不能挂载的话。在启动虚拟机后，点菜单栏-设备-分配光驱，把 VBoxGuestAdditions.iso 移除了，再选择虚拟盘安装上。
VBoxGuestAdditions.iso 文件在 Virtualbox 的安装目录中可以找到。然后执行以下操作。

```sh
mkdir /media/cdrom0
mount /dev/cdrom /media/cdrom0
/media/cdrom0/VBoxLinuxAdditions.run
umount /media/cdrom0
rmdir /media/cdrom1
```

如果安装失败 VBoxLinuxAdditions.run，屏幕打印出 `Kernel headers not found for target kernel`，很可能是 kernel-headers 不匹配。因为 VBoxGuestAdditions 依赖 kernel-devel 和 kernel-headers，即使主机上装了，也不一定版本匹配。所以先确认版本。

```sh
# 确认本机 kernel 版本
uname -r
# 确认 kernel-devel 的 rpm 包 (我用的是 CentOS，其他系统对应自己找)
rpm -qa | grep kernel-devel

# 如果 rpm 包版本跟本机不是一模一样的，需要这样安装 rpm 包
yum install kernel-devel-`uname -r`
```

然后再次尝试执行 VBoxLinuxAdditions.run。

如果安装失败 VBoxLinuxAdditions.run，查看 /var/log/vboxadd-setup.log 显示 `Count not find the X.Org or XFree86 Window System, skipping`，那就安装 xorg 相关的驱动。比如 `yum install xorg-x11-drivers xorg-x11-utils`。
