module.exports = {
  root: true,
  // 解析器 espree(默认), esprima, babel-eslint, @typescript-eslint/parse等
  // parser: 'espree',
  // 解析参数
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    // es 特性配置
    ecmaFeatures: {
      // jsx: true
    }
  },
  // 继承定义的规则集合
  extends: ['eslint:recommended'],
  // 插件
  plugins: ['tuia'],
  // 开启环境
  env: {
    'tuia/tuia': true,
    node: true,
    // browser: true,
    // es2020: true
  },
  rules: {
  }
}
