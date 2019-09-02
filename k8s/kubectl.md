## kubectl 学习

### CheatSheet

- [官方 CheatSheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [Kubectl Kubernetes CheatSheet](https://github.com/dennyzhang/cheatsheet-kubernetes-A4)

### kubeconfig 配置

[定义多个 kubeconfig 配置文件](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)

https://ahmet.im/blog/mastering-kubeconfig/

### 强制删除资源

```sh
#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail

if [[ $# == 0 ]]; then
  cat <<EOF
Usage: $0 <type> <name> [<ns>=kube-system]
EOF
  exit 0
fi

type=$1
name=$2
ns=${3:-kube-system}

kubectl delete "$type" "$name" -n "$ns" --grace-period=0 --force &
kubectl patch "$type" "$name" -n "$ns" -p '{"metadata":{"finalizers":null}}'
```
