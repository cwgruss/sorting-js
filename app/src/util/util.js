const { swap } = require('./swap');
const { shuffle } = require('./shuffle');
const { generateRandomArray, generateUniqueArray } = require('./generate-array');
const { isSorted } = require('./isSorted.js');
const { partition } = require('./partition');
const { isEmpty } = require('./isEmpty');

const Util = (function () {
    return {
        swap,
        shuffle,
        isSorted,
        partition,
        isEmpty,
        generateRandomArray,
        generateUniqueArray,
    };
}());
export default Util;
