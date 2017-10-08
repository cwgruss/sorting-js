const { swap } = require('./swap');
const { shuffle } = require('./shuffle');
const { generateRandomArray, generateUniqueArray } = require('./generate-array');
const { isSorted } = require('./isSorted.js');

const Util = (function () {
    return {
        swap,
        shuffle,
        isSorted,
        generateRandomArray,
        generateUniqueArray,
    };
}());
export default Util;
