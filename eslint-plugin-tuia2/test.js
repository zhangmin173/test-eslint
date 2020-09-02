const RuleTester = require('eslint').RuleTester
const rule = require('./rules/no-tuia')

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6
  }
})

ruleTester.run('test rule', rule, {
  valid: [
    `const a = 'TUIA'`
  ],
  invalid: [
    {
      code: `const a = 'tuia'`,
      errors: [{
        message: '卧槽，不能用tuia关键字'
      }]
    }
  ]
})