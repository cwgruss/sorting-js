import {
    Util,
} from '../../app/src/index';

describe('Utility library', () => {
    it('should be able to be instantiated', () => {
        expect(Util).toBeDefined();
    });

    describe('should be able to create an array', () => {
        it('of random integers', () => {
            const array = Util.generateRandomArray(10, 10);
            expect(array).toBeDefined();
        });

        it('of unique integers', () => {
            const array = Util.generateUniqueArray(1, 10);
            expect(array).toBeDefined();
        });
    });

    describe('should be able to show', () => {

        let array = null;
        let sortedArray = null;

        beforeEach(() => {
            const tmp = Util.generateUniqueArray(0, 12);
            array = tmp.slice(); //copy the array
            sortedArray = tmp.sort((a, b) => {
                return a - b;
            });
        });
        afterEach(() => {
            array = null;
            sortedArray = null;
        });

        it('that an array is sorted', () => {
            const isArraySorted = Util.isSorted(sortedArray)((index1, index2) => {
                return index1 <= index2;
            });

            expect(isArraySorted).toEqual(true);
        });

        it('that an array is NOT sorted', () => {
            const isArraySorted = Util.isSorted(array)((index1, index2) => {
                return index1 <= index2;
            });

            expect(isArraySorted).toEqual(false);
        });
    });

    describe('should be able to swap two values', () => {
        it('in a small array', () => {
            const initArray = [1, 2];
            const swappedArray = Util.swap(initArray, 0, 1);

            expect(swappedArray).toEqual([2, 1]);
        });

        it('in a larger array', () => {
            const initArray = [1, 2, 3, 4, 5];
            const swappedArray = Util.swap(initArray, 0, 4);

            expect(swappedArray).toEqual([5, 2, 3, 4, 1]);
        });
    });

    describe('should be able to partition', () => {
        it('an array with positive values', () => {
            const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
            const {
                beginning,
                pivots,
                ending,
            } = Util.partition(array, 0, array.length - 1, (a, b) => {
                return a < b;
            });

            expect(beginning).toEqual([5, 2, 3, 4]);
            expect(pivots).toEqual([6]);
            expect(ending).toEqual([9, 7, 11, 12, 14, 10]);
        });

        it('an array with negative values', () => {
            const array = [-5, -3, -2, -11, -9, -7, -6];
            const {
                beginning,
                pivots,
                ending,
            } = Util.partition(array, 0, array.length - 1, (a, b) => {
                return a < b;
            });

            expect(beginning).toEqual([-11, -9, -7]);
            expect(pivots).toEqual([-6]);
            expect(ending).toEqual([-5, -3, -2]);
        });

        it('an array with both positive and negative values', () => {
            const array = [4, 3, -8, 0, 8, 3, 5];
            const {
                beginning,
                pivots,
                ending,
            } = Util.partition(array, 0, array.length - 1, (a, b) => {
                return a < b;
            });

            expect(beginning).toEqual([4, 3, -8, 0, 3]);
            expect(pivots).toEqual([5]);
            expect(ending).toEqual([8]);
        });

        it('an array with duplicate elements', () => {
            const array = [4, 3, 1, 2, 3, 3, 5];
            const {
                beginning,
                pivots,
                ending,
            } = Util.partition(array, 0, array.length - 1, (a, b) => {
                return a < b;
            });

            expect(beginning).toEqual([4, 3, 1, 2, 3, 3]);
            expect(pivots).toEqual([5]);
            expect(ending).toEqual([]);
        });


        it('another array with duplicate elements', () => {
            const array = [4, 3, 1, 2, 3, 3, ];
            const {
                beginning,
                pivots,
                ending,
            } = Util.partition(array, 0, array.length - 1, (a, b) => {
                return a < b;
            });

            expect(beginning).toEqual([1, 2]);
            expect(pivots).toEqual([3, 3, 3]);
            expect(ending).toEqual([4]);
        });
    });

    describe('should be able to merge', () => {
        it('an array with 2 values', () => {
            const array1 = [0, 1];
            const array2 = [2, 3];

            const result = Util.merge(array1, array2);

            expect(result).toEqual([0, 1, 2, 3]);
        });

        it('an array with subarrays', () => {
            const array1 = [0, 1];
            const array2 = [2, 3];

            const result = Util.merge(array1, array2);

            expect(result).toEqual([0, 1, 2, 3]);
        });
    });

    describe('should be able to get', () => {
        it('the middle index of a full array', () => {
            const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
            const mi = Util.getMiddleIndex(array);
            const middleIndex = Math.floor((0 + array.length) / 2);

            expect(mi).toEqual(middleIndex);
        });

        it('the middle value of a full array', () => {
            const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
            const mv = Util.getMiddleValue(array);
            const middleIndex = Math.floor((0 + array.length) / 2);

            expect(mv).toEqual(array[middleIndex]);
        });

        it('the middle index of a subarray', () => {
            const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
            const mi = Util.getMiddleIndex(array, 2, 6);
            const middleIndex = Math.floor((2 + 6) / 2);

            expect(mi).toEqual(middleIndex);
        });

        it('the middle value of a subarray', () => {
            const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
            const mv = Util.getMiddleValue(array, 2, 6);
            const middleIndex = Math.floor((2 + 6) / 2);

            expect(mv).toEqual(array[middleIndex]);
        });
    });
});
