/**
 * A swap function that doesn't mutate the
 * original array.
 *
 * @param  {Array} array  [description]
 * @param  {number} index1 [description]
 * @param  {number} index2 [description]
 * @return {Array}        [description]
 */
function swap(array, index1, index2) {
    const newArray = array.slice();
    const temp = newArray[index1];
    newArray[index1] = array[index2];
    newArray[index2] = temp;
    return newArray;
}
exports.swap = swap;
