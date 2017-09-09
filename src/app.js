var Sort = function() {
    this.options = null;
    this.numbers = [9, 4, 3, 7, 1, 10, 5, 3];
};

Sort.prototype = {
    bubbleSort: function(cmp) {
        let self = this.numbers,
            length = self.length,
            i = 0,
            swapped = null,
            temp = null;

        do {
            swapped = false;
            for (i = 0; i < length - 1; i++) {
                if (cmp(self[i + 1], self[i])) {
                    temp = self[i];
                    self[i] = self[i + 1];
                    self[i + 1] = temp;
                    temp = null;
                    swapped = true;
                }
            }
        } while (swapped);
    },

    selectionSort: function(cmp) {
        let self = this.numbers,
            length = self.length,
            temp = null,
            i = 0,
            smallest = null,
            pos = 0;

        while (pos < length - 1) {
            smallest = pos;
            for (i = pos + 1; i < length; i++) {
                if (cmp(self[i], self[smallest])) {
                    smallest = i;
                }
            }
            if (smallest !== pos) {
                temp = self[pos];
                self[pos] = self[smallest];
                self[smallest] = temp;
                temp = null;
            }
            pos++;
        }
    }
};

(function() {
    'use strict';
    var sort = new Sort();
    console.log('====== SORTING-JS ======');
    console.log(sort);
    console.log('...sorting...');
    sort.selectionSort((item1, item2) => {
        return item1 > item2;
    });
    console.log(sort.numbers);
})();
