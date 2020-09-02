ESLint 第5篇

## 疑问

既然有了 eslint-plugin-xxx ，为什么要有 eslint-config-xxx 呢？

## plugin

[开发插件](https://eslint.bootcss.com/docs/developer-guide/working-with-plugins)

```
module.exports = {
  // 规则
  rules: {},
  // 环境
  environments: {},
  // 配置
  configs: {},
  // 处理器，如何处理javascript之外的文件
  processors: {}
}
```

## config

[共享配置](https://eslint.bootcss.com/docs/developer-guide/shareable-configs)

```
module.exports = {
  
}
```

