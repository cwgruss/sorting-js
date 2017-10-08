import { Util } from '../../app/src/index';

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

    describe('should be able to show',()=>{
        var array = null;
        var sortedArray = null;
        beforeEach(()=>{
            let tmp = Util.generateUniqueArray(0, 12);
            array = tmp.slice(); //copy the array
            sortedArray = tmp.sort((a,b)=>{
                return a-b;
            });
        });
        afterEach(()=>{
            array = null;
            sortedArray = null;
        });
        
        it('that an array is sorted', ()=>{
            let isArraySorted = Util.isSorted(sortedArray)((index1, index2) => {
                return index1 <= index2;
            });
            expect(isArraySorted).toBe(true);
        });

        it('that an array is NOT sorted', () => {
            let isArraySorted = Util.isSorted(array)((index1, index2) => {
                return index1 <= index2;
            });
            expect(isArraySorted).toBe(false);
        });
    })
});
