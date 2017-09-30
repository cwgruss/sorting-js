const { swap } = require('./swap');
const { shuffle } = require('./shuffle');
const { generateRandomArray, generateUniqueArray } = require('./generate-array');

const Util = (function () {
    return {
        swap,
        shuffle,
        generateRandomArray,
        generateUniqueArray,
    };
}());

export default Util;
