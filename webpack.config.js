module.exports = {
    entry: './public/main.js',
    target: 'node',
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'App.js'
    }
  }