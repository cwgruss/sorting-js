import noop from './noop';
const { shuffle } = require('./shuffle');

function generateRandomArray(length, max, callback) {
    callback = callback || noop;
    const arr = [];
    let i;
    let num;

    for (i = 0; i < length; i += 1) {
        num = Math.floor(Math.random() * max);
        callback(num);
        arr.push(num);
    }
    return arr;
}
exports.generateRandomArray = generateRandomArray;

function generateUniqueArray(start, end, callback) {
    callback = callback || noop;
    const arr = [];
    let i;

    for (i = start; i < end; i += 1) {
        callback(i);
        arr.push(i);
    }
    return shuffle(arr);
}
exports.generateUniqueArray = generateUniqueArray;
