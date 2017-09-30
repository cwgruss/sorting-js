describe('Utility library', () => {
    describe('Util Suite', () => {
        it('should be able to be instantiated', () => {
            expect(cwg.Util).toBeDefined();
        });

        it('can create array of random integers', () => {
            const array = cwg.Util.generateRandomArray(10, 10);
            console.log(array);

            expect(array).toBeDefined();
        });

        it('can create array of unique integers', () => {
            const array = cwg.Util.generateUniqueArray(10);
            console.log(array);

            expect(array).toBeDefined();
        });
    });
});
