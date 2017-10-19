// webpack.config.js

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname,
    filename: 'webpack.bundle.js'
  },
  module: {
      rules: [{
          test: /\.js$/,
          loader: 'babel-loader'
      }]
  }
};