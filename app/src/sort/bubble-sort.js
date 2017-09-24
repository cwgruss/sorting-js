/**
 * Bubble Sort:
 * @param  {function} compareFunction Specifies a function that defines the sort order
 * @return {Array} result The sorted array.
 */
function bubbleSort(arr) {
    return function (compareFunction) {
        const result = arr.slice(0);
        let i = 0;
        let swapped = null;
        let temp = null;

        do {
            swapped = false;
            for (i = 0; i < this.length - 1; i += 1) {
                if (compareFunction(result[i + 1], result[i])) {
                    temp = result[i];
                    result[i] = result[i + 1];
                    result[i + 1] = temp;
                    temp = null;
                    swapped = true;
                }
            }
        } while (swapped);
        return result;
    };
}

export default bubbleSort;
