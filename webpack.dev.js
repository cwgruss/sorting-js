const path = require('path');
const common = require('./webpack.common.js');

module.exports = {
    entry: [
        'babel-polyfill',
        './app.js',
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: [/node_modules/, 'spec/**/*.spec.js'],
    },

};
