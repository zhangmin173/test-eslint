const parser = require('recast')
const fs = require('fs')
const { variableDeclaration } = parser.types.builders

const res = fs.readFileSync('./a.js').toString()

let ast = parser.parse(res)

// ast.program.body.forEach(node => {
//   if (node.type === 'VariableDeclaration' && node.kind === 'const') {
//     node.kind = 'var'
//   }
// })

ast.program.body.forEach(node => {
  if (node.type === 'VariableDeclaration' && node.kind === 'const') {
    // node.parent.insert(variableDeclaration('var', {
    //   declarations: node.declarations
    // }))
    console.log(node.parent)
  }
})

ast = parser.print(ast)

console.log(ast)