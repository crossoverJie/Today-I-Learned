## KVM (Kernel-based Virtual Machine)

### 硬件虚拟化

完全虚拟化是非常慢的，所以要使用硬件辅助虚拟化技术 Intel-VT，AMD-V，所以需要CPU硬件开启这个标志位，一般在BIOS里面设置。

查看系统是否开启硬件虚拟化。

```sh
# 对于Intel CPU 可用命令判断
grep vmx /proc/cpuinfo

# 对于AMD CPU 可用命令判断
grep svm /proc/cpuinfo
```

如果没有任何的输出，说明你的 cpu 不支持虚拟化。
