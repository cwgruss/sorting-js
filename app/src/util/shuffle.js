const _ = require('lodash');
import noop from './noop';

function shuffle(array, callback) {
    callback = callback || noop;

    if (typeof _.shuffle !== 'function') {
        console.error('lodash: Shuffle has not been defined');
        return null;
    }
    let shuffledArray = _.shuffle(array);
    callback(shuffledArray);
    return shuffledArray;
}
exports.shuffle = shuffle;
