const test = require('./foo-module');
const foo = require('./foo');
const bar = require('./bar');

console.log(test.text);
console.log(foo.text);
console.log(bar.text);

exports.importantValue = 999;