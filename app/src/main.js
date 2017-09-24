const Sort = require('./index');

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
