import Util from '../util/util';

function quickSort(array) {

    function sort(array, pivot, compareFunction) {
        /* If the array has one or fewer elements, 
         * return an array with that single element or null.*/
       if(Util.isEmpty(array) || array.length === 1){
        return [].concat(array);
       }
        /* Partition the array into two subarrays——'beginning' and 'ending'——where 'beginning'
         * is the subaraay of elements that should come before the pivot value and 'ending' is 
         * the subarray of elements that should come after the pivot.
         * The pivot will be the last element of the array, and is returned as 'pivotValue' along 
         * with the two subarrays.  */
        let {beginning, pivots, ending } = Util.partition(array,0, pivot,compareFunction);

        /* Recursively partition the two subarrays, 'beginning' and 'ending', until each subarray
         * is composed of only 1 element. */
        return [
            ...sort(beginning,beginning.length-1,compareFunction),
            ...pivots,
            ...sort(ending, ending.length - 1, compareFunction)
        ];
    }

    return function (compareFunction) {
        let sortedArray = array.slice(0);
        const last = sortedArray.length - 1;
        sortedArray = sort(sortedArray, last, compareFunction);
        return sortedArray;
    };
}

export default quickSort;
