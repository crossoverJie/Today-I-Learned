## Cilium

### 两个 cilium

存在两个同名的 cilium 可执行程序。

一个是 [cilium](https://github.com/cilium/cilium/tree/master/cilium)，是 cilium 服务端的 CLI 工具，[官方 CLI 文档](https://docs.cilium.io/en/v1.11/cmdref/cli_index/) 描述的是这个命令。这个工具有 `cilium bpf` 和 `cilium cleanup` 等子命令。

一个是 [cilium-cli](https://github.com/cilium/cilium-cli)，是用来和 K8S 里的 cilium 服务交互的 CLI 工具。这个工具没有 `cilium bpf` 和 `cilium cleanup` 等子命令。

官方解释见[这个 issue](https://github.com/cilium/cilium/issues/17098#issuecomment-895049182)。
