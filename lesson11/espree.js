const parser = require('espree')
const fs = require('fs')

const res = fs.readFileSync('./a.js').toString()

let ast = parser.parse(res, {
  ecmaVersion: 12
})

console.log(ast)