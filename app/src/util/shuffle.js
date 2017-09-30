const _ = require('lodash');

function shuffle(array) {
    if (typeof _.shuffle !== 'function') {
        console.error('lodash: Shuffle has not been defined');
        console.log(_);
        return null;
    }
    return _.shuffle(array);
}
exports.shuffle = shuffle;
