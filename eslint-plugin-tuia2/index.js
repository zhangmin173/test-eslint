module.exports = {
  rules: {
    'no-tuia': require('./rules/no-tuia')
  },

  configs: {
    recommended: {
      plugins: ['tuia2'],
      rules: {
        'tuia2/no-tuia': 2
      }
    }
  }
}