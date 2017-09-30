describe('Main App', () => {
    console.log('====== SORTING-JS ======');
    describe('App Initialization', () => {
        it('should be able to be instantiated', () => {
            const sort = new cwg.Sort();

            expect(sort).toBeDefined();
        });
    });

    describe('Sorting', () => {
        it('should be able to sort a random array', () => {
            const randomArray = new cwg.Util.generateRandomArray(10, 10);
            const Sort = new cwg.Sort(randomArray);
            console.log(`Unsorted Array: ${randomArray}`);
            const result = Sort.bubbleSort((item1, item2) => item1 < item2);
            console.log(`Bubble Sort:${result}`);

            expect(result).toEqual(randomArray.sort());
        });
    });
});