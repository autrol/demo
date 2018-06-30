
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'index': path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
                // options: {
                //     minimize: true
                // }
            }]
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        // contentBase: path.join(__dirname, "src"),
        inline: true,
        compress: true,
        hot: true,
        port: 8080
    }
};