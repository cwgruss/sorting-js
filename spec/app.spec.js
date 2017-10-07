import {Sort, Util} from '../app/src/index';

describe('Main App', () => {
    console.log('====== SORTING-JS ======');
    describe('App Initialization', () => {
        it('should be able to be instantiated', () => {
            const sort = new Sort();
            expect(sort).toBeDefined();
        });
    });

    describe('Sorting', () => {

        describe('Bubble Sort', () => {
            it('should be able to sort a random array', () => {
                const randomArray = Util.generateRandomArray(10, 10);
                const sortable = new Sort(randomArray);
                const result = sortable.bubbleSort((item1, item2) => item1 < item2);
                expect(result).toEqual(randomArray.sort());
            });
        });
        
    });
});
