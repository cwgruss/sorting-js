import {Sort, Util} from '../app/src/index';

describe('Main App', () => {
    describe('App Initialization', () => {
        it('should be able to be instantiated', () => {
            const sort = new Sort();
            expect(sort).toBeDefined();
        });
    });

});


describe('A random array', () => {
    var randomArray = null;
    var sortedArray = null;
    var sortable = null;
    beforeEach(() => {
        let tmp = Util.generateRandomArray(10, 10);
        randomArray = tmp.slice();
        sortedArray = tmp.sort((a,b)=>{
            return a - b;
        });
        sortable = new Sort(randomArray);
    });
    afterEach(() => {
        randomArray = null;
        sortedArray = null;
        sortable = null;
    });

    it('can be sorted with Bubble Sort', ()=>{
        const result = sortable.bubbleSort((item1, item2) => item1 < item2);
        expect(result).toEqual(sortedArray);
    });

    it('can be sorted with Selection Sort', () => {
        const result = sortable.selectionSort((item1, item2) => item1 < item2);
        expect(result).toEqual(sortedArray);
    });

    it('can be sorted with Quick Sort', () => {
        const result = sortable.quickSort((item1, item2) => item1 < item2);
        expect(result).toEqual(sortedArray);
    });
});


describe('A unique array', () => {
    var randomArray = null;
    var sortedArray = null;
    var sortable = null;
    beforeEach(() => {
        let tmp = Util.generateUniqueArray(1,25);
        randomArray = tmp.slice();
        sortedArray = tmp.sort((a,b)=>{
            return a-b;
        });
        console.log(randomArray);
        console.log(sortedArray);
        sortable = new Sort(randomArray);
    });
    afterEach(() => {
        randomArray = null;
        sortedArray = null;
        sortable = null;
    });

    it('can be sorted with Bubble Sort', () => {
        const result = sortable.bubbleSort((item1, item2) => item1 < item2);
        expect(result).toEqual(sortedArray);
    });

    it('can be sorted with Selection Sort', () => {
        const result = sortable.selectionSort((item1, item2) => item1 < item2);
        expect(result).toEqual(sortedArray);
    });

    it('can be sorted with Quick Sort', () => {
        const result = sortable.quickSort((item1, item2) => item1 < item2);
        expect(result).toEqual(sortedArray);
    });
});
