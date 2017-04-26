module.exports = {
  entry: {
      'main': __dirname + '/src/main.js'
  },
  output: {
    path: __dirname + '/docs',
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: "babel-loader",
      }
    ]
  },
  resolve: {
      extensions: ['.js']
  },
  devtool: 'inline-source-map',
};