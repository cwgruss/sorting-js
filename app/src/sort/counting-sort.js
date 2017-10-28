function countingSort(array) {
    const buckets = {};
    let index = 0;
    let elValue = null;

    return function (compareFunction) {
        const result = array.slice(0); // Copy the array
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
            buckets[elValue].count += 1; // Increment the number of times that 'value' has appeared
        }

        console.log('BUCKETS: ', buckets);
        index = isAscending ? 0 : result.length - 1;
        let keys = Object.keys(buckets);
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
}

export default countingSort;
