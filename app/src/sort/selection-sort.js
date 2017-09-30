/**
 * Selection Sort:
 * @param  {function} compareFunction Specifies a function that defines the sort order
 * @return {Array} result The sorted array.
 */
function selectionSort(arr) {
    return function (compareFunction) {
        const result = arr.slice(0);
        let temp = null;
        let i = 0;
        let smallest = null;
        let pos = 0;

        while (pos < this.length - 1) {
            smallest = pos;
            for (i = pos + 1; i < this.length; i += 1) {
                if (compareFunction(result[i], result[smallest])) {
                    smallest = i;
                }
            }
            if (smallest !== pos) {
                temp = result[pos];
                result[pos] = result[smallest];
                result[smallest] = temp;
                temp = null;
            }
            pos += 1;
        }
        return result;
    };
}

export default selectionSort;