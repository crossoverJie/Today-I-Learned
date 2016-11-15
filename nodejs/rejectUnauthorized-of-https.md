## 调整 rejectUnauthorized 选项来容许 https 证书无效

在 https://nodejs.org/api/https.html#https_https_request_options_callback 这段里有：

> rejectUnauthorized: If true, the server certificate is verified against the list of supplied CAs. An 'error' event is emitted if verification fails. Verification happens at the connection level, before the HTTP request is sent. Default true.

**然而要注意**

> However, a globalAgent silently ignores these.

想要更改全局默认的 https.globalAgent 的 rejectUnauthorized 是没有用的，只能在 `https.request(options, callback)` 里设置。


另外，不要使用 `process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';`。
因为它会禁用所有的 SSL/TLS 检查，是个很危险的操作。

参考 http://stackoverflow.com/questions/20433287/node-js-request-cert-has-expired#answer-29397100
