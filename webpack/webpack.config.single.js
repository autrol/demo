const webpack = require('webpack');
const path = require('path')

module.exports = {
  entry: {
    index: [path.resolve(__dirname, './src/circle/index.js')],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash:8].js'
  },
}