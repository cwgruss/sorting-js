const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.base.js');

module.exports = (env = {}) {
    return merge(base(env), {
        devtool: 'source-map',
        plugins: [
            new UglifyJSPlugin({
                sourceMap: true,
                compress: true,
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            new DashboardPlugin(),
            new BundleAnalyzerPlugin(),
            new webpack.EnvironmentPlugin([
                'NODE_ENV',
            ]),
        ],

    });
};
