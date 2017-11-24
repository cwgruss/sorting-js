import noop from './noop';

const {
    shuffle,
} = require('lodash');


function shuffleArray(array, callback) {
    callback = callback || noop;

    if (typeof shuffle !== 'function') {
        console.error('lodash: Shuffle has not been defined');
        return null;
    }
    const shuffledArray = shuffle(array);
    callback(shuffledArray);
    return shuffledArray;
}
exports.shuffle = shuffleArray;
