const RuleTester = require('eslint').RuleTester
const rule = require('./rules/no-tuia')

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6
  }
})

ruleTester.run('test rule', rule, {
  valid: [
    {
      code: `const a = 'TUIA'`,
      options: ['XXX']
    }
  ],
  invalid: [
    {
      code: `const a = 'tuia'`,
      options: [`'XXX'`],
      errors: [{
        message: '卧槽，不能用tuia关键字'
      }],
      output: `const a = 'XXX'`
    }
  ]
})