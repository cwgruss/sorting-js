import {
    cloneDeep,
} from 'lodash';

const CountingSort = (function () {
    const initBucketsToZero = function (array) {
        const buckets = {};

        if (array.length) {
            array.forEach((item) => {
                buckets[item] = {
                    count: 0,
                    value: item,
                };
            });
        }

        return buckets;
    };

    const countingSort = function (compareFunction) {
        const buckets = {};
        let index = 0;
        let elValue = null;

        const result = this.slice(0); // Copy the array
        const isAscending = compareFunction(0, 1);
        let count = 0;

        /* Iterate through the original array, counting
         * each element and keeping track of that count at the index corresponding to 'value'
         * in the buckets array. */
        for (index = 0; index < result.length; index += 1) {
            elValue = result[index];
            count = buckets[elValue] ? buckets[elValue].count : 0;
            buckets[elValue] = {
                count,
                value: elValue,
            };

            // Increment the number of times that 'value' has appeared
            buckets[elValue].count += 1;
        }

        index = isAscending ? 0 : result.length - 1;
        const keys = Object.keys(buckets);
        if (keys.length > 0) {
            keys.forEach((key) => {
                while (buckets[key].count > 0) {
                    result[index] = buckets[key].value;
                    buckets[key].count -= 1; // decrement the count for key
                    // advance the position in the array, allowing for the next element to be added
                    index = isAscending ? (index + 1) : (index - 1);
                }
            });
        }

        return result; // Return the sorted array
    };

    const countGenerator = function* (array, buckets) {
        let index = 0;
        let elValue = null;
        const arrayCopy = array.slice(0); // Copy the array
        const bucketsCopy = cloneDeep(buckets);

        for (index = 0; index < arrayCopy.length; index += 1) {
            elValue = arrayCopy[index];
            if (bucketsCopy[elValue]) {
                bucketsCopy[elValue].count += 1;
                yield bucketsCopy;
            }
        }
        return bucketsCopy;
    };

    const sortGenerator = function* (array, buckets, isAscending) {
        const arrayCopy = array.slice(0); // Copy the array
        const bucketsCopy = cloneDeep(buckets);

        let index = isAscending ? 0 : arrayCopy.length - 1;
        const keys = Object.keys(bucketsCopy);
        let currentKey = null;
        const newArray = [];
        for (let i = 0; i < keys.length; i += 1) {
            currentKey = keys[i];
            while (bucketsCopy[currentKey].count > 0) {
                newArray[index] = bucketsCopy[currentKey].value;
                bucketsCopy[currentKey].count -= 1; // decrement the count for key
                // advance the position in the array, allowing for the next element to be added
                index = isAscending ? (index + 1) : (index - 1);
                yield newArray;
            }
        }
        return newArray;
    };

    const countingSortGenerator = function* (compareFunction) {
        let result = this.slice(0); // Copy the array
        let buckets = initBucketsToZero(result);
        const isAscending = compareFunction(0, 1);

        buckets = yield* countGenerator(result, buckets);
        result = yield* sortGenerator(result, buckets, isAscending);
        return result;
    };

    return {
        sort(compareFunction, useGenerator = false) {
            if (useGenerator) {
                return countingSortGenerator.call(this, compareFunction);
            }
            return countingSort.call(this, compareFunction);
        },
    };
}());


export default CountingSort;
