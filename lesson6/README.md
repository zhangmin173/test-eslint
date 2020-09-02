ESLint 第6篇

## environments

插件的 environments 定义了一系列环境，通过 globals 关键字定义了环境中的全局变量

```
{
  environments: {
    环境1: {
      globals: {
        window: false
      }
    },
    环境2: {
      globals: {
        document: false
      }
    }
  }
}
```

true / false 只是决定了这个全局变量是否可以被重写

## 使用

```
{
  env: {
    '插件名/环境名': true
  }
}
```

## 思考

思考一下 environments 在实际业务中的应用场景？
