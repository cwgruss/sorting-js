const { swap } = require('./swap');
const { shuffle } = require('./shuffle');
const { generateRandomArray, generateUniqueArray } = require('./generate-array');
const { isSorted } = require('./isSorted.js');
const { partition } = require('./partition');
const { isEmpty } = require('./isEmpty');
const { getMiddleIndex, getMiddleValue } = require('./middle');

const Util = (function () {
    return {
        swap,
        shuffle,
        isSorted,
        partition,
        isEmpty,
        getMiddleIndex,
        getMiddleValue,
        generateRandomArray,
        generateUniqueArray,
    };
}());
export default Util;
