const { Sort, Util } = require('./app/src/index');

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
const root =
    (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) ||
    this ||
    {};

(function (global) {
    global.app = {
        Sort,
        Util,
    };
}(root));
