ESLint 第4篇

## 支持 jsx

以 .jsx 为结尾的文件，ESLint 可以支持 JSX，只需要简单的开启 ecmaFeatures jsx true 即可

## 支持 react

但是 ESLint 自身的规则和 react 相关某些特性是冲突的，需要被纠正（重写）

这里我们引入 eslint-plugin-react 提供的 recommended 规则：plugin:react/recommended

