module.exports = {
  meta: {
    type: 'suggstion', // 值为 "problem"、"suggestion" 或 "layout"

    docs: {
      description: '不用使用 tuia 关键字',
      // category: '', 官方分类
      // recommended: true, 官方推荐 
      url: 'http://baidu.com'
    },

    // fixable: true, 是否可以被修复，如果规则不可以被修复，则省略改字段
    schema: [], // 规则配置参数
  },

  create (context) {
    const { options } = context
    console.log(options)

    return {
      'VariableDeclarator': function (node) {
        
        const is = node.init.type === 'Literal'

        if (!is) return
        
        if (node.init.value.indexOf('tuia') > -1) {
          context.report({
            node: node,
            message: "卧槽，不能用tuia关键字"
          })
        }
      }
    }
  }
}