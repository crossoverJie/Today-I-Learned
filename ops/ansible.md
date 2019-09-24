## Ansible

### TOC

<!-- MarkdownTOC GFM -->

- [Ansible vs 写脚本](#ansible-vs-写脚本)
- [Ansible Ad-Hoc](#ansible-ad-hoc)
- [Ansible Playbook](#ansible-playbook)
    - [变量优先级顺序](#变量优先级顺序)
    - [执行顺序](#执行顺序)
- [Ansible Modules](#ansible-modules)
- [ansible.cfg 加载顺序](#ansiblecfg-加载顺序)
- [gather_fact 缓存问题](#gather_fact-缓存问题)
- [立刻退出 play](#立刻退出-play)
- [其他相关资料](#其他相关资料)

<!-- /MarkdownTOC -->

### Ansible vs 写脚本

Ansible 的优势

- 步骤控制、重试、自检，步骤说明
- 多机器执行命令
- 模板渲染

Ansible 的缺点，模块和参数比较多，学习成本相对较大。

Ansible 可以直接操作 localhost，这样就可以代替写脚本。

### Ansible Ad-Hoc

### Ansible Playbook

https://galaxy.ansible.com

#### 变量优先级顺序

优先级从低到高排序

- command line values (eg “-u user”)
- role defaults [1]
- inventory file or script group vars [2]
- inventory group_vars/all [3]
- playbook group_vars/all [3]
- inventory group_vars/* [3]
- playbook group_vars/* [3]
- inventory file or script host vars [2]
- inventory host_vars/* [3]
- playbook host_vars/* [3]
- host facts / cached set_facts [4]
- play vars
- play vars_prompt
- play vars_files
- role vars (defined in role/vars/main.yml)
- block vars (only for tasks in block)
- task vars (only for the task)
- include_vars
- set_facts / registered vars
- role (and include_role) params
- include params
- extra vars (always win precedence)

[文档](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html?highlight=host_vars#variable-precedence-where-should-i-put-a-variable)

#### 执行顺序

> This designates the following behaviors, for each role ‘x’:
>
> If roles/x/tasks/main.yml exists, tasks listed therein will be added to the play.
> If roles/x/handlers/main.yml exists, handlers listed therein will be added to the play.
> If roles/x/vars/main.yml exists, variables listed therein will be added to the play.
> If roles/x/defaults/main.yml exists, variables listed therein will be added to the play.
> If roles/x/meta/main.yml exists, any role dependencies listed therein will be added to the list of roles (1.3 and later).
> Any copy, script, template or include tasks (in the role) can reference files in roles/x/{files,templates,tasks}/ (dir depends on task) without having to path them relatively or absolutely.
> When used in this manner, the order of execution for your playbook is as follows:
>
> Any pre_tasks defined in the play.
> Any handlers triggered so far will be run.
> Each role listed in roles will execute in turn. Any role dependencies defined in the roles meta/main.yml will be run first, subject to tag filtering and conditionals.
> Any tasks defined in the play.
> Any handlers triggered so far will be run.
> Any post_tasks defined in the play.
> Any handlers triggered so far will be run.

[文档](https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_roles.html?#using-roles)

### Ansible Modules

查看模块文档：`ansible-doc [-l|-F|-s] [options] [-t <plugin type> ] [plugin]`

### ansible.cfg 加载顺序

- ANSIBLE_CONFIG (environment variable if set)
- ansible.cfg (in the current directory)
- ~/.ansible.cfg (in the home directory)
- /etc/ansible/ansible.cfg

从上往下找到第一个匹配的文件，其他忽略。

https://docs.ansible.com/ansible/latest/reference_appendices/config.html

### gather_fact 缓存问题

每个 play 默认是 `gather_facts: true` 的，如果要禁止抓取机器信息需要设置 `gather_facts: false`

ansible.cfg 有几个选项会影响到 gather_facts 的实施。

```
[defaults]
gathering = smart
gather_subset = network,hardware
fact_caching = jsonfile
fact_caching_connection = /tmp
fact_caching_timeout = 86400
```

gathering 如果是 `smart` 或者 `explicit`，除了第一次会抓取 fact 外，之后每次执行 ansible，且每个 play 之间都会利用 `fact_caching_connection` 指向目录下的缓存。如果 gathering 是 `implicit`，则每个 play 都会去抓取 fact。

`gather_subset` 会影响抓取的内容，默认是 `all` 全部抓取，也可以指定抓取内容。

`fact_caching` 的取值影响 `fact_caching_connection`。

### 立刻退出 play

无错误的退出用 `meta`，详见[文档](https://docs.ansible.com/ansible/latest/modules/meta_module.html)。

```
- meta: end_play
```

有错误的退出用 `fail`，[详见](https://docs.ansible.com/ansible/latest/modules/fail_module.html#fail-module)。

```
- fail:
    msg: This failed!
```

### 其他相关资料

- [Jinja2](../others/jinja2.md)
