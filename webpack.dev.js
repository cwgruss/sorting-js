const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = (env = {}) => {

    return merge(base(env), {
        devtool: 'inline-source-map',
    });
};
