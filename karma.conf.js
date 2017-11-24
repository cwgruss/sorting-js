// Karma configuration
// Generated on Sun Sep 10 2017 12:09:14 GMT-0500 (CDT)
const webpackConfig = require('./webpack.config.js');
const path = require('path');

module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: ['dist/*.js', 'spec/*.spec.js', 'spec/**/*.spec.js'],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // add webpack as preprocessor
            '**/spec/*.spec.js': ['webpack', 'sourcemap', 'coverage'],
            '**/spec/**/*.spec.js': ['webpack', 'sourcemap', 'coverage'],
        },

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                }, ],
            },
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['html', 'coverage', 'progress'],

        htmlReporter: {
            outputDir: 'karma/karma_html', // where to put the reports  
            templatePath: null, // set if you moved jasmine_template.html 
            focusOnFailures: true, // reports show failures on start 
            namedFiles: true, // name files instead of creating sub-directories 
            pageTitle: 'Sorting JS', // page title for reports; browser info by default 
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 
            reportName: 'sorting-js.tests', // report summary filename; browser info by default 
        },
        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'karma/coverage/',
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
    });
};
