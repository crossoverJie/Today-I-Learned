## Helm

### Chart

[官方最佳实践](https://github.com/helm/helm/tree/master/docs/chart_best_practices)

### Chart 依赖

[requirements.yaml](https://github.com/helm/helm/blob/master/docs/helm/helm_dependency.md)

支持本地文件的引用

```yaml
# requirements.yaml
dependencies:
- name: nginx
  version: "1.2.3"
  repository: "file://../dependency_chart/nginx"
```

但是打包的时候得先 `helm dep up` 把其他目录的 chart 下载到当前目录的 charts 目录，然后才能 `helm package`。否则会报错 `found in requirements.yaml, but missing in charts/ directory`。


### helm upgrade

- [helm upgrade --reset-values 与 --reuse-values 的区别](https://medium.com/@kcatstack/understand-helm-upgrade-flags-reset-values-reuse-values-6e58ac8f127e)


### helm --set 包含逗号

比如 `helm install --set ids=1,2` 会报错，因为 `,` 是作为 `--set` 的分隔符的，比如 `--set a=1,b=2` 这样。
所以正确写法是 `helm install --set ids=1\,2`。
参考 [issue](https://github.com/helm/helm/issues/2952#issuecomment-330699580)。
