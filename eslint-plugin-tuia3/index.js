module.exports = {
  rules: {
    'no-tuia': require('./rules/no-tuia')
  },

  configs: {
    recommended: {
      plugins: ['tuia3'],
      rules: {
        'tuia3/no-tuia': ['error', `'TUIB'`]
      }
    }
  }
}