import BubbleSort from './sort/bubble-sort';
import CountingSort from './sort/counting-sort';
import InsertionSort from './sort/insertion-sort';
import Util from './util/util';

const ArrayProto = Array.prototype;
// const ObjProto = Object.prototype;

function Sort(arr) {
    this.array = null;

    if (arr instanceof Array) {
        this.array = arr.slice();
        // this.length = Array.length.apply(this.array);
    }
    this.init();
}

Sort.prototype = {
    constructor: Sort,
    bubbleSort: null,
    selectionSort: null,
    quickSort: null,
    toString() {
        return ArrayProto.toString.apply(this.array);
    },
    init() {
        this.bubbleSort = BubbleSort.sort.bind(this.array);
        this.countingSort = CountingSort.sort.bind(this.array);
        this.insertionSort = InsertionSort.sort.bind(this.array);
        // this.mergeSort = mergeSort(this.arr);

        // this.quickSort = quickSort(this.arr);
        // this.selectionSort = selectionSort(this.arr);
    },
};
