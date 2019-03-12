## export default 的类型注明

问题:

```typescript
import * as webpack from 'webpack';
export default: webpack.Configuration {
    ...
};
```

这样写会报错。

答案:

```typescript
import * as webpack from 'webpack'

export default {
    ...
} as webpack.Configuration
```

详见 https://github.com/Microsoft/TypeScript/issues/13626#issuecomment-471234355
