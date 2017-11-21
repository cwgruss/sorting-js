import Util from '../util/util';

const BubbleSort = (function () {
    /**
     * Bubble Sort:
     * @param  {function} compareFunction Specifies a function that defines the sort order
     * @return {Array} the sorted array
     */
    const bubbleSort = function (compareFunction) {
        let result = this.slice(0); // Copy the array
        const lastIndex = result.length - 1;

        let currentIndex;

        /* Until the array can be traversed in its entirity without
         * swapping two elements, then there remain elements that
         * need to be sorted. The varaible 'swapped' tracks whether
         * two elements have had two be swapped. */
        let swapped = null;

        do {
            swapped = false;

            /* Loop through the array, comparing the current element, array[i],
             * with the next, array[i+1]. */
            for (currentIndex = 0; currentIndex < lastIndex; currentIndex += 1) {
                /* If the compareFunction shows that the current element and
                 * the next element are in wrong order, swap the two elements
                 * and continue looping through the array. */
                if (compareFunction(result[currentIndex + 1], result[currentIndex])) {
                    result = Util.swap(result, currentIndex, currentIndex + 1);
                    swapped = true;
                }
            }

            /* If no two elements were swapped inside the inner
             * loop, then break */
        } while (swapped);

        return result; // Return the sorted array
    };

    const bubbleSortGenerator = function* (compareFunction) {
        let result = this.slice(0); // Copy the array
        const lastIndex = result.length - 1;
        let currentIndex;

        /* Until the array can be traversed in its entirity without
         * swapping two elements, then there remain elements that
         * need to be sorted. The varaible 'swapped' tracks whether
         * two elements have had two be swapped. */
        let swapped = null;

        do {
            swapped = false;

            /* Loop through the array, comparing the current element, array[i],
             * with the next, array[i+1]. */
            for (currentIndex = 0; currentIndex < lastIndex; currentIndex += 1) {
                /* If the compareFunction shows that the current element and
                 * the next element are in wrong order, swap the two elements
                 * and continue looping through the array. */
                if (compareFunction(result[currentIndex + 1], result[currentIndex])) {
                    result = Util.swap(result, currentIndex, currentIndex + 1);
                    swapped = true;
                    yield result;
                }
            }

            /* If no two elements were swapped inside the inner
             * loop, then break */
        } while (swapped);

        yield result;
    };

    return {
        sort(compareFunction, useGenerator = false) {
            if (useGenerator) {
                return bubbleSortGenerator.call(this, compareFunction);
            }
            return bubbleSort.call(this, compareFunction);
        },
    };
}());

export default BubbleSort;
