const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
    const NODE_ENV = env.NODE_ENV || 'local';
    const ENV = env.production ? 'prod' : 'dev';
    console.log('NODE_ENV: ', NODE_ENV);
    console.log('Environment: ', ENV);

    return {
        entry: [
            'babel-polyfill',
            './app/src/index.js',
        ],
        output: {
            filename: `[name].${ENV}.bundle.js`,
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
        devServer: {
            inline: true,
            contentBase: './dist',
        },
        watchOptions: {
            aggregateTimeout: 500,
            poll: 1000,
            ignored: [/node_modules/, 'spec/**/*.spec.js'],
        },
        plugins: [
            new HtmlWebpackPlugin(),
        ],
    };
};
