// even.js
// import { odd } from './odd'
// export var counter = 0;
// export function even(n) {
//   counter++;
//   console.log('even n: ' + n);
//   return n == 0 || odd(n - 1);
// }

const odd = require('./odd');
var counter = 0;

module.exports = function(n) {
    counter++;
    console.log('even n: ' + n);
    return n == 0 || odd(n - 1);
};
