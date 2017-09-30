function quickSort(array) {
    function swap(items, firstIndex, secondIndex) {
        const temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    function partition(arr, first, last, compareFunction) {
        const pivotValue = arr[last]; // Get last elemet of array
        let i = first - 1;
        let j;
        for (j = first; j <= last - 1; j += 1) {
            if (compareFunction(arr[j], pivotValue)) {
                i += 1;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, last);
        return i + 1;
    }

    function sort(arr, first, last, compareFunction) {
        let pIndex; // The partition index
        // console.table([arr, [first], [last]]);
        if (arr.length > 1) {
            pIndex = partition(arr, first, last, compareFunction);

            if (first < pIndex - 1) {
                sort(arr, first, pIndex - 1, compareFunction);
            }

            if (last > pIndex) {
                sort(arr, pIndex + 1, last, compareFunction);
            }
        }
        return arr;
    }

    return function (compareFunction) {
        let result = array.slice(0);
        const first = 0;
        const last = result.length - 1;
        result = sort(result, first, last, compareFunction);
        return result;
    };
}

export default quickSort;
