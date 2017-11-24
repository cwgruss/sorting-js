const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './app.js',
    ],
    plugins: [
        new DashboardPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            }],
            exclude: /node_modules/,
        }],
    },
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: [/node_modules/, 'spec/**/*.spec.js'],
    },

};
