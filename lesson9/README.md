ESLint 第9篇

## fix

定义了自己的规则，起码要提供自动修复的能力，不然谁想用呢？

```
module.exports = {
  // 插件的自定义规则
  rules: {
    '不能有下划线': {
      meta: {
        fixable: true, // 必须开启修复
      },
      create (context) {
        return {
          '节点类型': function (node) {
            // 如果不符合这条规则，就抛出错误
            context.report({
              node,
              message: '错误信息',
              fix: function(fixer) {
                return fixer.function();
              }
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

你知道如何修复规则了吗
