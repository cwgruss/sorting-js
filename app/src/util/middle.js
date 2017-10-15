
function getMiddleIndex(array, start = 0, end = (array.length - 1)){
    return Math.floor((start + end) / 2);
}
exports.getMiddleIndex = getMiddleIndex;


function getMiddleValue(array, start = 0, end = (array.length - 1)) {
    let middle = getMiddleIndex(array,start,end);
    return array[middle];
}
exports.getMiddleValue = getMiddleValue;