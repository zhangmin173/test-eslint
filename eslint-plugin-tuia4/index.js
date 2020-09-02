module.exports = {
  processors: {
    '.tuia': {
      preprocess: function (text, filename) {
        text = text.replace(/tuia/g, "TUIA")
        console.log(text, filename)
        return [text]
      },

      postprocess: function (messages, filename) {
        const problems = messages[0]
        
        return problems.map((problem) => {
            return {
                ...problem,
                message: problem.message + "(found by tuia4!)"
            }
        })
      },

      supportsAutofix: true
    }
  }
}