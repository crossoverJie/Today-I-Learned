# 运维小技巧 - 硬件

## 生成硬件信息拓扑图

`lstopo`

## CPU

查看 CPU 信息 `cat /proc/cpuinfo`，或者 `lscpu`

```
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
Address sizes:       39 bits physical, 48 bits virtual
CPU(s):              6                                           逻辑 CPU 个数
On-line CPU(s) list: 0-5
Thread(s) per core:  1                                           每个 CPU 的线程数
Core(s) per socket:  1                                           每个插槽的 CPU 核数
Socket(s):           6                                           CPU 插槽数
Vendor ID:           GenuineIntel
CPU family:          6                                           CPU 产品系列代号
Model:               158                                         CPU 属于其系列代号中哪一代的代号
Model name:          Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz    CPU 属于的名字及其编号、标称主频
Stepping:            10                                          CPU 步进
CPU MHz:             2600.000
BogoMIPS:            5200.00
L1d cache:           32K
L1i cache:           32K
L2 cache:            256K
L3 cache:            12288K
Flags:               fpu vme ...
```

### 查看物理 CPU 个数

`cat /proc/cpuinfo |grep "physical id"|sort |uniq|wc -l`

### 查看逻辑 CPU 个数

`cat /proc/cpuinfo |grep "processor"|wc -l`

### 查看单个 CPU 有几个核

`cat /proc/cpuinfo |grep "cores"|uniq`

### 查看 CPU 的主频

`cat /proc/cpuinfo |grep MHz|uniq`
