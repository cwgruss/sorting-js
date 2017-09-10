describe('Main App', () => {
    console.log('====== SORTING-JS ======');
    describe('App Initialization', () => {
        it('should be able to be instantiated', () => {
            const sort = new Sort();

            expect(sort).toBeDefined();
        });

        it('can assign array property', () => {
            const sort = new Sort();
            const testArray = [10, 9, 8, 4, 5, 2, '', 1];
            sort.arr = testArray;

            expect(sort.arr).toBeDefined();
        });
    });
});
