import Util from '../util/util';

/**
 * Bubble Sort:
 * @param  {function} compareFunction Specifies a function that defines the sort order
 * @return {Array} the sorted array
 */
function bubbleSort(array) {
    return function (compareFunction) {
        let result = array.slice(0); // Copy the array

        let i;

        /* Until the array can be traversed in its entirity without
         * swapping two elements, then there remain elements that
         * need to be sorted. The varaible 'swapped' tracks whether
         * two elements have had two be swapped. */
        let swapped = null;

        do {

            swapped = false;

            /* Loop through the array, comparing the current element, array[i],
             * with the next, array[i+1]. */
            for (i = 0; i < this.length - 1; i += 1) {

                /* If the compareFunction shows that the current element and
                 * the next element are in wrong order, swap the two elements
                 * and continue looping through the array. */
                if (compareFunction(result[i + 1], result[i])) {
                    result = Util.swap(result, i, i + 1);
                    swapped = true;
                }
            }

            /* If no two elements were swapped inside the inner
             * loop, then break */
        } while (swapped);

        return result; // Return the sorted array
    };
}

export default bubbleSort;
