const { printSumm } = require('./print-summ');
const { printDiff } = require('./print-diff');

const print = (x, y) => {
    printSumm(x, y);
    printDiff(x, y);
    printDiff(y, x);
};

print(9, 10);
print(7, 3);
print(1, 0);
