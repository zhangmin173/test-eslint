module.exports = {
    root: true,
    // 解析器 espree(默认), esprima, babel-eslint, @typescript-eslint/parse等
    // parser: 'espree',
    // 解析参数
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    // 继承定义的规则集合
    extends: ['eslint:recommended', 'plugin:vue/recommended'],
    // 插件
    plugins: [],
    // 开启环境
    env: {
        node: true,
        browser: true,
        es2020: true
    },
    rules: {
        // 'no-console': ['error']
        // "vue/comment-directive": 0
    }
};
