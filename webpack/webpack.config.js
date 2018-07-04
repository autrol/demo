const path = require('path');
const webpack = require('webpack');
const MyPlugin = require('./plugin/my-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
    },
    plugins: [
        new MyPlugin({
            options: true
        }),
    ]
}