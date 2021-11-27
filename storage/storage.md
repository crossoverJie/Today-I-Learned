## 存储

### 概念

根据存储内容分类：

- 块存储
- 文件存储
- 对象存储

根据存储媒介分类：

- 直连存储 (DAS, Direct Attach Storage)
- 共享存储
  - SAN (Storage Area Network)
    - FC-SAN
    - IP-SAN
    - iSCSI-SAN
  - iSCSI
  - NFS
  - FTP
  - SMB
    - CIFS
- 分布式存储 (DFS, Distributed File System)

### 程序服务

- Ceph：支持块存储、文件存储、对象存储
- SAMBA：支持 SMB
- nfsd：支持 NFS
- NAS (Network Attached Storage)：支持 NFS、SMB、FTP
  - OpenMediaVault
  - Unraid
  - FreeNAS
  - Synology NAS
- MinIO: 支持对象存储
