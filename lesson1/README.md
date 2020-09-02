ESLint 第1篇

> 可组装的 JavaScript 和 JSX 检查工具

## 发展史

> 在计算机科学中，Lint 是一种工具的名称，它用来标记代码中，某些可疑的、不具结构性（可能造成 bug ）的语句。它是一种静态程序分析工具，最早适用于C语言，在UNIX平台上开发出来。后来它成为通用术语，可用于描述在任何一种编程语言中，用来标记代码中有疑义语句的工具。— by wikipedia

### JSLint

最早的 Lint 工具，规则不可自定义

作者：Douglas Crockford （道爷）

背景：JavaScript 是一门强大的函数式动态语言，但是它本身也有很多缺陷。最大的缺陷就是一个变量如果缺少 var 申明，它就自动变成了全局变量，从而导致不可预料的错误。

### JSHint

JSHint 在 JSLint 的基础上提供了丰富的配置项，给了开发者极大的自由

作者：Anton Kovalyov 

背景：JSLint 让很多人无法忍受它的规则，感觉受到了压迫

## ESLint

Nicholas C. Zakas (《JavaScript 高级程序设计》作者) 于2013年6月创建

背景：Zakas 想使用 JSHint 添加一条自定义的规则，但是发现 JSHint 不支持，于是自己开发了一个

[了解更多关于 ESLint 以及 它为什么会出现和它背后的原理](https://eslint.bootcss.com/docs/about/)

## 使用

```
// 初始化 package.json
npm init -y
// 安装 ESLint
npm add eslint -D
// 初始化 ESLint 配置
npx eslint --init
```

执行完了之后，ESLint 会在项目中安装上依赖并且生成配置文件，比如：.eslintrc.js
