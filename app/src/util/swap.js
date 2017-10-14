import noop from './noop';
/**
 * A swap function that doesn't mutate the
 * original array.
 *
 * @param  {Array} array  The source array, with indicies 'index1' and index2'
 * @param  {number} index1 An index in 'array', which will be swapped with 'index2'
 * @param  {number} index2 A second index in 'array', which will be swapped with 'index1'
 * @return {Array}        
 */
function swap(array, index1, index2, callback) {
    callback = callback || noop;

    const newArray = array.slice(0);
    const temp = newArray[index1];
    newArray[index1] = array[index2];
    newArray[index2] = temp;
    callback(newArray);
    return newArray;
}
exports.swap = swap;
