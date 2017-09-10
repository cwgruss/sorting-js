const Sort = function () {
    this.options = null;
    this.numbers = [9, 4, 3, 7, 1, 10, 5, 3];
};

Sort.prototype = {
    /**
     * Bubble Sort:
     * @param  {function} compareFunction Specifies a function that defines the sort order
     * @return {Array} result The sorted array.
     */
    bubbleSort(compareFunction) {
        const result = [].concat(this.numbers);
        const { length } = result;
        let i = 0;
        let swapped = null;
        let temp = null;

        do {
            swapped = false;
            for (i = 0; i < length - 1; i += 1) {
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
    },

    /**
     * Selection Sort:
     * @param  {function} compareFunction Specifies a function that defines the sort order
     * @return {Array} result The sorted array.
     */
    selectionSort(compareFunction) {
        const result = [].concat(this.numbers);
        const { length } = result;
        let temp = null;
        let i = 0;
        let smallest = null;
        let pos = 0;

        while (pos < length - 1) {
            smallest = pos;
            for (i = pos + 1; i < length; i += 1) {
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
    },

    // mergeSort(compareFunction) {
    //     function merge(arr) {
    //         const { length } = arr;
    //         const middle = Math.floor(length / 2);
    //         if (length <= 1) {
    //             return arr;
    //         }
    //         return merge(sort(arr.slice(0, middle)), sort(arr.slice(middle)));
    //     }
    //
    //     function sort(left, right) {
    //         const { leftLength } = left;
    //         const { rightLength } = right;
    //         while (leftLength > 0 && rightLength > 0) {
    //             if (left[0] <= right[0]) {
    //             } else {
    //             }
    //         }
    //         if (leftLength > 0) {
    //         } else if (right(rightLength > 0)) {
    //         }
    //     }
    // },
};

(function () {
    const sort = new Sort();
    console.log('====== SORTING-JS ======');
    console.log('...sorting...');
    console.log(sort.numbers);
    const result = sort.selectionSort((item1, item2) => item1 > item2);
    console.log(result);
}());
