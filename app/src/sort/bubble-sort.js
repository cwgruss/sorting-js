import Util from '../util/util';

/**
 * Bubble Sort:
 * @param  {function} compareFunction Specifies a function that defines the sort order
 * @return {Array} result The sorted array.
 */
function bubbleSort(arr) {
    return function (compareFunction) {
        /* Copy the original array to avoid side effects. */
        let result = arr.slice(0);

        let i = 0;
        let swapped = null;

        do {
            swapped = false;
            for (i = 0; i < this.length - 1; i += 1) {
                /* If the compareFunction(a,b) shows that items are in the
                 * wrong order, swap the two elements and continue looping
                 * through the array. */
                if (compareFunction(result[i + 1], result[i])) {
                    result = Util.swap(result, i, i + 1);
                    swapped = true;
                }
            }

            /* If no two elements were swapped inside the inner
             * loop, then break */
        } while (swapped);
        return result;
    };
}

export default bubbleSort;
