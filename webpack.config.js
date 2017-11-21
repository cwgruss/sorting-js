const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './app.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }),
    ],
};
