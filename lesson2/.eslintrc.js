module.exports = {
    root: true,
    // 解析器 espree(默认), esprima, babel-eslint, @typescript-eslint/parse等
    parser: 'espree',
    // 解析参数
    parserOptions: {
        // es 版本号，默认为 5，也可以是用年份，比如 2015 (同 6)
        ecmaVersion: 12,
        // 代码类型：script(默认), module
        sourceType: 'module',
        // es 特性配置
        ecmaFeatures: {

        }
    },
    // 继承定义的规则集合
    extends: 'eslint:recommended',
    // 开启环境
    env: {
        node: true,
        browser: true,
        es2020: true
    },
    // 重写规则
    rules: {
        'no-console': ['error']
    }
};
