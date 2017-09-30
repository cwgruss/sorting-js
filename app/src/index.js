import bubbleSort from './sort/bubble-sort';
import selectionSort from './sort/selection-sort';
import quickSort from './sort/quick-sort';
import Util from './util/util';

const ArrayProto = Array.prototype;
// const ObjProto = Object.prototype;

function Sort(arr) {
    console.log(Util);
    this.arr = Util.generateUniqueArray(100);
    Util.shuffle(this.arr);
    this.length = this.arr.length;
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
    },
};

module.exports = Sort;
