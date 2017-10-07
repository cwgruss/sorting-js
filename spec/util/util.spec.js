import { Util } from '../app/src/index';
describe('Utility library', () => {
    describe('Util Suite', () => {
        it('should be able to be instantiated', () => {
            expect(Util).toBeDefined();
        });

        it('can create array of random integers', () => {
            const array = Util.generateRandomArray(10, 10);
            expect(array).toBeDefined();
        });

        it('can create array of unique integers', () => {
            const array = Util.generateUniqueArray(1, 10);
            expect(array).toBeDefined();
        });
    });
});
