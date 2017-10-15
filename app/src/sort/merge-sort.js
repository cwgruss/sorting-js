import Util from '../util/util';

const merge = (subArray1, subArray2, compareFunction) => {
    // console.log(subArray1.toString(), subArray2.toString());

    if (subArray1.length === 0) {
        return [].concat(subArray2);
    }
    if (subArray2.length === 0) {
        return [].concat(subArray1);
    }

    if (compareFunction(subArray1[0], subArray2[0])) {
        return [subArray1[0]].concat(merge(subArray1.slice(1), subArray2, compareFunction));
    }

    return [subArray2[0]].concat(merge(subArray1, subArray2.slice(1), compareFunction));
};

const sort = (array, compareFunction) => {
    if (array.length < 2) {
        return array;
    }
    let mi = Util.getMiddleIndex(array);

    let lower = array.slice(0, mi + 1);
    let upper = array.slice(mi + 1);

    return merge(sort(lower, compareFunction), sort(upper, compareFunction), compareFunction);
};

function mergeSort(array) {
    return (compareFunction) => {
        let sortedArray = array.slice(0);
        sortedArray = sort(sortedArray, compareFunction);
        return sortedArray;
    };
}

export default mergeSort;
