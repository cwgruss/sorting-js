import bubbleSort from './sort/bubble-sort';
import selectionSort from './sort/selection-sort';

// const ArrayProto = Array.prototype;
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
    toString() {
        return Array.prototype.toString.call(this.arr);
    },
    init() {
        this.bubbleSort = bubbleSort(this.arr);
        this.selectionSort = selectionSort(this.arr);
    },
};
module.exports = Sort;

(function () {
    const obj = {
        arr: [9, 10, 8, 4, 2, 7, 1],
        options: null,
    };
    const a = new Sort(obj.arr);
    console.log('====== SORTING-JS ======');
    const result = a.bubbleSort((item1, item2) => item1 > item2);
    console.log(a.toString());
    console.log(result.toString());
}());
