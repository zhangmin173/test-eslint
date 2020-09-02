ESLint 第10篇

## processors

告诉 ESLint 如何处理 JavaScript 之外的文件

```
module.exports = {
  processors: {
    // 针对 .tuia 后缀的文件
    '.tuia': {
      // 替换 tuia 为 TUIA
      preprocess: function (text, filename) {
        text = text.replace(/tuia/g, "TUIA")
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
```

## 使用

```
{
  plugins: ['tuia4']
}
```

## 思考

你知道如何自定义文件处理器了吗
