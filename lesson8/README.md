ESLint 第8篇

## rules

前面说了那么多，rule 到底怎么自定义呢？[自定义规则](https://eslint.bootcss.com/docs/developer-guide/working-with-rules)

```
module.exports = {
  // 插件的自定义规则
  rules: {
    '不能有下划线': {
      meta: {

      },
      create (context) {
        return {
          '节点类型': function (node) {
            // 如果不符合这条规则，就抛出错误
            context.report({
              node,
              message: '错误信息'
            })
          }
        }
      }
    },
  }
}
```

## 使用

```
{
  extends: 'plugin:我自己/recommended'
}
```

## 思考

你会定义自己的规则了吗
