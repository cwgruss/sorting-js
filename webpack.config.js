const path = require('path');

module.exports = {
    entry: './app/src/index.js',
    output: {
        // export package to a global var
        libraryTarget: 'var',
        // name of the global var: "Package"
        library: 'cwg',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    externals: {
        Sort: 'Sort',
        Util: 'Util',
    },
    // module: {
    //     rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
    // },
};
