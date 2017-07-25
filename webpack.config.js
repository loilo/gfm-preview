module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'dist/app.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}