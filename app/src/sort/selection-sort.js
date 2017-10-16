import Util from '../util/util';

/**
 * Selection Sort:
 * @param  {function} compareFunction Specifies a function that defines the sort order
 * @return {Array} result The sorted array.
 */
function selectionSort(array) {
    return function (compareFunction) {
        let result = array.slice(0); // Copy the array

        /* Keep track of the leading element. If sorting the array in
         * ascending order, 'leading' will point to the smallest element
         * in the yet unsorted part of the array. */
        let leading = null;

        /* 'headPosition' points to the left-most element
         * in the unsorted part of the array. Before the
         * loop below, the entire array is unsorted; 'headPosition'
         * therefore points to the initial element of the array, i.e array[0]. */
        let headPosition = 0;

        /* While 'headposition' does NOT point at the index of
         * the last element in the array, there remain unsorted
         * elements in the array ... */
        let i;
        while (headPosition < this.length - 1) {
            leading = headPosition;

            /* Loop through the unsorted array, from 'headPosition' to
             * the last element, searching for the leading-most element. */
            for (i = headPosition + 1; i < this.length; i += 1) {

                /* If the compareFunction shows that array[i] should come before
                 * array[leading], make array[i] the leading-most element. */
                if (compareFunction(result[i], result[leading])) {
                    leading = i;
                }
            }

            /* If 'headPosition'——the first element in the unsorted array——is not
             * the leading element, then it is not in the correct position and
             * needs to be swapped. */
            if (leading !== headPosition) {
                result = Util.swap(result, headPosition, leading);
            }

            /* The leading-most element is now assumed to be sorted and in the correct
             * position. Increment 'headPosition' so that it points to the first, unsorted
             * element of the remaining, unsorted array. */
            headPosition += 1;
        }


        return result; // Return the sorted array
    };
}

export default selectionSort;
