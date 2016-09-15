## 文件命名，下划线还是中划线？

> 当文件名包含多个单词，应该用什么作分隔符？

我选择用中划线 `-` 作单词分隔符。因为

- This_is_a_single_word
- This-is-a-sentence-with-multiple-words

主要有两大原因:

1. 正则表达式 `\w` 不会识别 `-`，但是会识别 `_`
2. 文件系统命名和网络 url 有关系

然而 google 搜索引擎会将 `_` 连接的单词作为一个单词。比如搜索 `web_site` 实际上只会找关键词 `website`。  
只有 `web-site` 会分为 `web` 和 `site` 来查找

### 参考

- [CODING HORROR - Of Spaces, Underscores and Dashes](https://blog.codinghorror.com/of-spaces-underscores-and-dashes/)
