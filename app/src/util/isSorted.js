
function isSorted(array){
    let length = array.length - 1;
    return (compareFunction) => {
        for (var index = 0; index < length; index++) {
            if(!(compareFunction(array[index],array[index + 1]))){
                return false;
            }
        }
        return true;
    }
}

exports.isSorted = isSorted;