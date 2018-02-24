## Here Strings and Here Documents

### [Here Strings](https://www.gnu.org/software/bash/manual/bashref.html#Here-Strings)

`[n]<<< word`

### [Here Documents](https://www.gnu.org/software/bash/manual/bashref.html#Here-Documents)

```
[n]<<[-]word
        here-document
delimiter
```

注意，默认 here-document 会执行 $var $() 语法替换，只有在 word 两边加上括号可以防止替换。
例如，

```
[n]<<[-]'word'
        here-document
delimiter
```

参考 Here Documents 的文档，或者 https://stackoverflow.com/a/22698106
