const parser = require('@babel/parser')
const fs = require('fs')

const res = fs.readFileSync('./a.js').toString()

let ast = parser.parse(res)

console.log(ast)