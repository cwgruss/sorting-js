const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: [/node_modules/, 'spec/**/*.spec.js'],
    },
    plugins: [
        new DashboardPlugin(),
        new BundleAnalyzerPlugin(),
    ],
};
