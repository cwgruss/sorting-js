const { shuffle } = require('./shuffle');

function generateRandomArray(length, max) {
    const arr = [];
    let i;

    for (i = 0; i < length; i += 1) {
        arr.push(Math.floor(Math.random() * max));
    }
    return arr;
}
exports.generateRandomArray = generateRandomArray;

function generateUniqueArray(length) {
    const arr = Array.from(new Array(length), (val, index) => index + 1);
    return shuffle(arr);
}
exports.generateUniqueArray = generateUniqueArray;
