describe('Utility library', () => {
    describe('Util Suite', () => {
        it('should be able to be instantiated', () => {
            expect(app.Util).toBeDefined();
        });

        it('can create array of random integers', () => {
            const array = app.Util.generateRandomArray(10, 10);

            expect(array).toBeDefined();
        });

        it('can create array of unique integers', () => {
            const array = app.Util.generateUniqueArray(1, 10);

            expect(array).toBeDefined();
        });
    });
});
