const bubbleSort = require('./sort/bubble-sort');
const selectionSort = require('./sort/selection-sort');

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['lodash'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('lodash'));
    } else {
        // Browser globals (Note: root is window)
        root.returnExports = factory(root.lodash);
    }
}(this, (_) => {
    const ArrayProto = Array.prototype;
    const ObjProto = Object.prototype;
    const obj = {
        arr: [9, 10, 8, 4, 2, 7, 1],
        options: null,
    };
    const Sort = function (array) {
        this.arr = null;
        this.length = 0;
        if (array instanceof Array) {
            this.arr = array;
            this.length = array.length;
        }
    };
    Sort.prototype = {
        constructor: Sort,
        bubbleSort: bubbleSort(),
        selectionSort: selectionSort(),
        init() {},
    };
}));

(function () {
    const a = new Sort(obj.arr);
    console.log('====== SORTING-JS ======');
    const result = a.selectionSort((item1, item2) => item1 > item2);
    console.log(a);
    console.log(result);
}());
