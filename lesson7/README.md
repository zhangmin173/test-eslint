ESLint 第7篇

## configs

插件的 configs 定义了一系列预设，字段同 eslint 配置

```
var base = {
  parser: '',
  parserOptions: {
  },
  plugins: ['我自己'],
  env: {
    node: true,
    es6: true
  },
  rules: {
    '我自己/不能有下划线': 0,
    '我自己/不能有中文': 2,
    '我自己/不能有英文': 2,
    '我自己/不能有甲骨文': 2
  }
}

module.exports = {
  // 插件的自定义规则
  rules: {
    '不能有下划线': {},
    '不能有中文': {},
    '不能有英文': {},
    '不能有甲骨文': {}
  },
  configs: {
    base: base,
    recommended: {
      extends: base,
      rules: {
        '我自己/不能有下划线': 2,
      }
    }
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

什么情况下需要在使用插件的时候，在配置文件的 plugins 里面制定插件呢？
