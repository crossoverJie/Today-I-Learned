## Ansible

### Ansible Ad-Hoc

### Ansible Playbook

https://galaxy.ansible.com

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

https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_roles.html?#using-roles

### Ansible Modules

查看模块文档：`ansible-doc [-l|-F|-s] [options] [-t <plugin type> ] [plugin]`
