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
