import {
    Sort,
    Util,
} from '../../app/src/index';

describe('Bubble Sort\'s module', () => {
    let randomArray = null;
    let randomArrayCopy = null;
    let arraySortedByJS = null;
    let SortableArray = null;

    describe(', given a random array of 10 non-unique numbers,', () => {
        beforeEach(() => {
            const tmp = Util.generateRandomArray(10, 10);
            randomArray = tmp.slice(); // Copy the array
            randomArrayCopy = tmp.slice(); // Copy the array, again
            arraySortedByJS = tmp.sort((a, b) => a - b);
            SortableArray = new Sort(randomArray);
        });

        afterEach(() => {
            randomArray = null;
            randomArrayCopy = null;
            arraySortedByJS = null;
            SortableArray = null;
        });

        it('returns a sorted array', () => {
            const result = SortableArray.bubbleSort((item1, item2) => item1 < item2, false);

            expect(result).toEqual(arraySortedByJS);
            expect(randomArray).toEqual(randomArrayCopy);
        });

        it('yields a sorted array', () => {
            const generator = SortableArray.bubbleSort((item1, item2) => item1 < item2, true);
            let done = false;
            let currentNext;
            let currentNextValue;
            while (!(currentNext = generator.next()).done) {;
                currentNextValue = currentNext.value;
            }
            expect(currentNextValue).toEqual(arraySortedByJS);
            expect(randomArray).toEqual(randomArrayCopy);
        });
    });

    describe(', given a random array of 10 unique numbers,', () => {
        beforeEach(() => {
            const tmp = Util.generateUniqueArray(0, 10);
            randomArray = tmp.slice(); // Copy the array
            randomArrayCopy = tmp.slice(); // Copy the array, again
            arraySortedByJS = tmp.sort((a, b) => a - b);
            SortableArray = new Sort(randomArray);
        });

        afterEach(() => {
            randomArray = null;
            randomArrayCopy = null;
            arraySortedByJS = null;
            SortableArray = null;
        });

        it('returns a sorted array', () => {
            const result = SortableArray.bubbleSort((item1, item2) => item1 < item2, false);

            expect(result).toEqual(arraySortedByJS);
            expect(randomArray).toEqual(randomArrayCopy);
        });

        it('yields a sorted array', () => {
            const generator = SortableArray.bubbleSort((item1, item2) => item1 < item2, true);
            let done = false;
            let currentNext;
            let currentNextValue;
            while (!(currentNext = generator.next()).done) {;
                currentNextValue = currentNext.value;
            }
            expect(currentNextValue).toEqual(arraySortedByJS);
            expect(randomArray).toEqual(randomArrayCopy);
        });
    });

    describe(', given a random array of 100 non-unique numbers,', () => {
        beforeEach(() => {
            const tmp = Util.generateRandomArray(100, 100);
            randomArray = tmp.slice(); // Copy the array
            randomArrayCopy = tmp.slice(); // Copy the array, again
            arraySortedByJS = tmp.sort((a, b) => a - b);
            SortableArray = new Sort(randomArray);
        });

        afterEach(() => {
            randomArray = null;
            randomArrayCopy = null;
            arraySortedByJS = null;
            SortableArray = null;
        });

        it('returns a sorted array', () => {
            const result = SortableArray.bubbleSort((item1, item2) => item1 < item2, false);

            expect(result).toEqual(arraySortedByJS);
            expect(randomArray).toEqual(randomArrayCopy);
        });

        it('yields a sorted array', () => {
            const generator = SortableArray.bubbleSort((item1, item2) => item1 < item2, true);
            let done = false;
            let currentNext;
            let currentNextValue;
            while (!(currentNext = generator.next()).done) {;
                currentNextValue = currentNext.value;
            }
            expect(currentNextValue).toEqual(arraySortedByJS);
            expect(randomArray).toEqual(randomArrayCopy);
        });
    });

    describe(', given a random array of 100 unique numbers,', () => {
        beforeEach(() => {
            const tmp = Util.generateUniqueArray(0, 100);
            randomArray = tmp.slice(); // Copy the array
            randomArrayCopy = tmp.slice(); // Copy the array, again
            arraySortedByJS = tmp.sort((a, b) => a - b);
            SortableArray = new Sort(randomArray);
        });

        afterEach(() => {
            randomArray = null;
            randomArrayCopy = null;
            arraySortedByJS = null;
            SortableArray = null;
        });

        it('returns a sorted array', () => {
            const result = SortableArray.bubbleSort((item1, item2) => item1 < item2, false);

            expect(result).toEqual(arraySortedByJS);
            expect(randomArray).toEqual(randomArrayCopy);
        });

        it('yields a sorted array', () => {
            const generator = SortableArray.bubbleSort((item1, item2) => item1 < item2, true);
            let done = false;
            let currentNext;
            let currentNextValue;
            while (!(currentNext = generator.next()).done) {;
                currentNextValue = currentNext.value;
            }
            expect(currentNextValue).toEqual(arraySortedByJS);
            expect(randomArray).toEqual(randomArrayCopy);
        });
    });
});
