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
    var sortable = null;
    beforeEach(() => {
        randomArray = Util.generateRandomArray(10, 10);
        sortable = new Sort(randomArray);
    });
    afterEach(() => {
        randomArray = null;
        sortable = null;
    });

    it('can be sorted with Bubble Sort', ()=>{
        const result = sortable.bubbleSort((item1, item2) => item1 < item2);
        expect(result).toEqual(randomArray.sort());
    });

    it('can be sorted with Selection Sort', () => {
        const result = sortable.selectionSort((item1, item2) => item1 < item2);
        expect(result).toEqual(randomArray.sort());
    });
});
