import {
    Sort,
    Util,
} from '../app/src/index';

describe('Main App', () => {
    describe('App Initialization', () => {
        it('should be able to be instantiated', () => {
            const sort = new Sort();

            expect(sort).toBeDefined();
        });
    });
});


describe('A random array', () => {
    let randomArray = null;
    let randomArrayCopy = null;
    let sortedArray = null;
    let sortable = null;

    beforeEach(() => {
        const tmp = Util.generateRandomArray(10, 10);
        randomArray = tmp.slice(); // Copy the array
        randomArrayCopy = tmp.slice(); // Copy the array, again
        sortedArray = tmp.sort((a, b) => a - b);
        sortable = new Sort(randomArray);
    });

    afterEach(() => {
        randomArray = null;
        randomArrayCopy = null;
        sortedArray = null;
        sortable = null;
    });

    it('can be sorted with Bubble Sort', () => {
        const result = sortable.bubbleSort((item1, item2) => item1 < item2);

        expect(result).toEqual(sortedArray);
        expect(randomArray).toEqual(randomArrayCopy);
    });

    it('can be sorted with Selection Sort', () => {
        const result = sortable.selectionSort((item1, item2) => item1 < item2);

        expect(result).toEqual(sortedArray);
        expect(randomArray).toEqual(randomArrayCopy);
    });

    it('can be sorted with Quick Sort', () => {
        const result = sortable.quickSort((item1, item2) => item1 < item2);

        expect(result).toEqual(sortedArray);
        expect(randomArray).toEqual(randomArrayCopy);
    });

    it('can be sorted with Countingg Sort', () => {
        const result = sortable.countingSort((item1, item2) => item1 < item2);

        expect(result).toEqual(sortedArray);
        expect(randomArray).toEqual(randomArrayCopy);
    });
});


describe('A unique array', () => {
    let randomArray = null;
    let randomArrayCopy = null;
    let sortedArray = null;
    let sortable = null;

    beforeEach(() => {
        const tmp = Util.generateUniqueArray(1, 25);
        randomArray = tmp.slice();
        randomArrayCopy = tmp.slice(); // Copy the array, again
        sortedArray = tmp.sort((a, b) => a - b);

        sortable = new Sort(randomArray);
    });

    afterEach(() => {
        randomArray = null;
        randomArrayCopy = null;
        sortedArray = null;
        sortable = null;
    });

    it('can be sorted with Bubble Sort', () => {
        const result = sortable.bubbleSort((item1, item2) => item1 < item2);

        expect(result).toEqual(sortedArray);
        expect(randomArray).toEqual(randomArrayCopy);
    });

    it('can be sorted with Selection Sort', () => {
        const result = sortable.selectionSort((item1, item2) => item1 < item2);

        expect(result).toEqual(sortedArray);
        expect(randomArray).toEqual(randomArrayCopy);
    });

    it('can be sorted with Insertion Sort', () => {
        const result = sortable.insertionSort((item1, item2) => item1 < item2);

        expect(result).toEqual(sortedArray);
        expect(randomArray).toEqual(randomArrayCopy);
    });

    it('can be sorted with Quick Sort', () => {
        const result = sortable.quickSort((item1, item2) => item1 < item2);

        expect(result).toEqual(sortedArray);
        expect(randomArray).toEqual(randomArrayCopy);
    });

    it('can be sorted with Counting Sort', () => {
        const result = sortable.countingSort((item1, item2) => item1 < item2);

        expect(result).toEqual(sortedArray);
        expect(randomArray).toEqual(randomArrayCopy);
    });
});
