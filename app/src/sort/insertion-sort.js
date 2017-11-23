import Util from '../util/util';

/**
 * Insert() inserts a given element——i.e. 'value'——into its
 * correct place in the left-hand, sorted partition of 'array';
 * the sorted parition is the subrarry[0..rightIndex). In order to do this, the
 * function makes room for 'value' by moving items that come after value to the right.
 *
 * @param {*} array 
 * @param {*} rightIndex 
 * @param {*} value 
 * @param {*} compareFunction 
 */
const insert = (array, rightIndex, value, compareFunction) => {
    let result = array.slice(0); // Copy the array

    /* Starting at the right, at the end of the sorted parition, traverse
     * the array (right to left) until an element that comes before 'value' is found, or the
     * start of the array, and the sorted partition, is reached.  */
    let i = rightIndex;
    while ((!compareFunction(result[i], value)) && i >= 0) {

        /* Make room for the element 'value' by shifting elements that
         * come after 'value' to the right. */
        result = Util.swap(result, i + 1, i);

        i -= 1;
    }

    /* Finally, insert the value and return the partially sorted
     * array.  */
    result[i + 1] = value;
    return result;
};

/**
 * Insertion Sort:
 * @param  {function} compareFunction Specifies a function that defines the sort order
 * @return {Array} result The sorted array.
 */
function insertionSort(array) {
    return function (compareFunction) {
        let result = array.slice(0); // Copy the array
        let valueToInsert;


        /* Loop over all the elements except the first one,
         * which is assumed to be trivially sorted. One each consecutive
         * iteration, insert the current element in its correct position
         * in the sorted, left-hand partition. */
        let i = 1;
        let lastSortedIndex;
        while (i <= result.length - 1) {
            valueToInsert = array[i]; // Grab the current element

            /* The previous element in the array is the last element in
             * the sorted array. */
            lastSortedIndex = i - 1;

            // Insert the current element in its correct posistion on the left
            result = insert(result, lastSortedIndex, valueToInsert, compareFunction);
            i += 1;
        }

        return result; // Return the sorted array
    };
}

export default insertionSort;
