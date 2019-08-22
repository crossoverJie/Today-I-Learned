## Helm

### Helm Chart

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
