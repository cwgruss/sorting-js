import bubbleSort from './sort/bubble-sort';
import mergeSort from './sort/merge-sort';
import selectionSort from './sort/selection-sort';
import quickSort from './sort/quick-sort';
import Util from './util/util';

const ArrayProto = Array.prototype;
// const ObjProto = Object.prototype;

function Sort(arr) {
    this.arr = null;
    this.length = 0;
    if (arr instanceof Array) {
        this.arr = arr;
        this.length = this.arr.length;
    }
    this.init();
}

Sort.prototype = {
    constructor: Sort,
    bubbleSort: null,
    selectionSort: null,
    quickSort: null,
    toString() {
        return ArrayProto.toString.call(this.arr);
    },
    init() {
        this.bubbleSort = bubbleSort(this.arr);
        this.selectionSort = selectionSort(this.arr);
        this.quickSort = quickSort(this.arr);
        this.mergeSort = mergeSort(this.arr);
    },
};

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
