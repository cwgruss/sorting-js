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

function generateUniqueArray(start, end) {
    const arr = [];
    let i;

    for (i = start; i < end; i += 1) {
        arr.push(i);
    }
    return shuffle(arr);
}
exports.generateUniqueArray = generateUniqueArray;
