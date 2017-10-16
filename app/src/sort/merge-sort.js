import Util from '../util/util';

/**
 * A recursive function that merges two already
 * sorted arrays into one single, sorted array.
 * 
 * @param {Array} subArray1
 * @param {Array} subArray2
 * @param {Function} compareFunction
 * @returns either an array of one element, or a recursive call
 * that remaining elements of 'subArray1' and 'subArray2'
 */
const merge = (subArray1, subArray2, compareFunction) => {

    /* If subArray1 is empty, just return the already
     * sorted subArray2. */
    if (subArray1.length === 0) {
        return [].concat(subArray2);
    }

    /* Vice-versa, If subArray2 is empty, just return the already
     * sorted subArray1. */
    if (subArray2.length === 0) {
        return [].concat(subArray1);
    }

    /* However, if both subarrays have elements remaining, there still
     * remains some sorting (and merging) to do ... */

    /* If the first element of 'subArray1' comes before the
     * first element of 'subArray2', then a new array is created with that
     * initial element; the remaining, un-sorted values are recusrively
     *  processed and merged with that array. */
    if (compareFunction(subArray1[0], subArray2[0])) {
        return [subArray1[0]].concat(merge(subArray1.slice(1), subArray2, compareFunction));
    }

    /* If instead the first element of 'subArray2' comes before the
     * first element of 'subArray1', then the same is done, but with
     * subArray2[0] as the initial element of this new array.  */
    return [subArray2[0]].concat(merge(subArray1, subArray2.slice(1), compareFunction));
};

/**
 * Sort splits the initial array(arr[s...e]) into two smaller,
 * subarrays; lower, being the bottom half of the array(arr[s..q]), and
 * upper, which is all elements after the middle element(arr[q + 1..e]).
 * @param {Array} array
 * @param {Function} compareFunction
 */
const sort = (array, compareFunction) => {
    /* BASE CASE:
     * If the array has one or fewer elements, simply return
     * that element (or null). */
    if (array.length < 2) {
        return array;
    }

    // Get the center point of the array
    const middleIndex = Util.getMiddleIndex(array);

    /* NOTE: Array.slice(begin,end) extracts from start
     * up to 'end', but does not include 'end'. */
    const lower = array.slice(0, middleIndex + 1);
    const upper = array.slice(middleIndex + 1);

    /* Recursively split the array nto halves, and merge each half
     * back together in the correct order. */
    return merge(sort(lower, compareFunction), sort(upper, compareFunction), compareFunction);
};

/**
 * A currying function that executes
 * the recursive calls necessary to implement
 * merge sort.
 * @param {Array} array 
 */
function mergeSort(array) {
    return (compareFunction) => {
        let sortedArray = array.slice(0);
        sortedArray = sort(sortedArray, compareFunction);
        return sortedArray;
    };
}

export default mergeSort;
