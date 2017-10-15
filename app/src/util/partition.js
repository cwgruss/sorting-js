/**
 * The partition() function should divide the initial array[firstIndex … lastIndex]
 * into two subarrays, where all elements in subarray[firstIndex … pivot - 1] are 
 * less than or equal to array[pivot], and all elements in subarray[pivot + 1… lastIndex]
 * are greater than array[pivot].
 * 
 * @param {Array} array 
 * @param {number} firstIndex 
 * @param {number} lastIndex 
 * @param {Function} compareFunction 
 */
function partition(array, firstIndex, lastIndex, compareFunction) {
    let pivotValue = array[lastIndex];
    let beginning = [];
    let pivots = [];
    let ending = [];

    // Compare array[i] with pivotValue, for i = firstIndex, firstIndex+1,...lastIndex.
    for (var i = firstIndex; i < lastIndex; i++) {
        // Do NOT add the pivot to any of the arrays (beginning or ending).
        if(array[i] === pivotValue){ 
            pivots.push(array[i]);
            continue;
        } 

        if (compareFunction(array[i], pivotValue)) {
            /* If array[i] comes before the pivotValue, 
             * then add it to the array of earlier values. */
            beginning.push(array[i]);
        }
        if (!compareFunction(array[i], pivotValue)){
            /* If array[i] comes after pivotValue, 
             * then add it to the array of later values. */
            ending.push(array[i]);
        }
    }
    pivots.push(pivotValue);
    
    /* Once all elements in array[firstIndex..lastIndex] have been 
     * compared with pivotValue, return the earlier values, the pivot,
     * and the ending values in an object. */
    return { beginning, pivots, ending};
}
exports.partition = partition;