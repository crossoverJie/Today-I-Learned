## docker 小技巧

### 保持 shell 一直启动

ENTRYPOINT ["tail", "-f", "/dev/null"]
