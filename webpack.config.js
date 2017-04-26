module.exports = {
  context: __dirname + '/src',
  entry: {
      'main': 'main.js'
  },
  output: {
    path: __dirname + '/doc',
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