# mobiusbye

对象循环引用检测，可以知道对象中哪两个属性发生了循环引用。

## 安装

```shell
npm i mobiusbye
```

## 使用

```js
// ESM
import mobiusbye from 'mobiusbye';

// CommonJS
const mobiusbye = require('mobiusbye/release/commonjs/index').default;
```

```js

const obj = {
  a: {
    b: {
      c: {
        d: {
          e: 1,
        },
      },
    },
  },
};

obj.a.b.c.d.e = obj as any;

mobiusbye(obj);

// 输出：
// {
//   path: [ [ 'a', 'b', 'c', 'd', 'e', 'a' ], [ 'a' ] ],
//   value: { b: { c: [Object] } }
// }
```

## 名称由来

再见莫比乌斯环。
