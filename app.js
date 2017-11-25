const {
    Sort,
    Util
} = require('./app/src/index');

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
exports.Util = Util;
exports.Sort = Sort;
var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global ||
    this || {};

(function (global) {
    'use strict';
    global.Util = Util;
    global.Sort = Sort;
}(root));
