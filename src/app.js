(function() {
    'use strict';

    let Sort = {
        options: null,
        numbers: [9, 4, 3, 7, 1, 10, 5, 3],
        bubbleSort: function(cmp) {
            let self = this.numbers,
                length = self.length,
                swapped = null,
                temp = null;

            do {
                swapped = false;
                for (var i = 0; i < length - 1; i++) {
                    if (cmp(self[i], self[i + 1])) {
                        temp = self[i];
                        self[i] = self[i + 1];
                        self[i + 1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
        }
    };

    console.log('====== SORTING-JS ======');
    console.log(JSON.stringify(Sort.numbers));
    console.log('...sorting...');
    Sort.bubbleSort((item1, item2) => {
        return item1 > item2;
    });
    console.log(Sort.numbers);
})();
