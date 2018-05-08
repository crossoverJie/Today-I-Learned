## sudo, gksudo, kdesudo

> sudo stands for Super User Do. That means it provide privileges of the root/main user via terminal.
>
> gksudo and kdesudo both are also sudo thing except that first one is use for graphical sudo operation which works using GUI instead of terminal and second one is gksudo alternative for Kubuntu.
>
> And a short note from wiki
>
>> You should never use normal sudo to start graphical applications as Root.You should use
>> gksudo (kdesudo on Kubuntu) to run such programs. gksudo sets HOME=~root, and copies
>> .Xauthority to a tmp directory. This prevents files in your home directory becoming
>> owned by Root. (AFAICT, this is all that's special about the environment of the started
>> process with gksudo vs. sudo).

Reference from https://askubuntu.com/a/425644
