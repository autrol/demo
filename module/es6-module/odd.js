// odd.js
// import { even } from './even';
// export function odd(n) {
//   console.log('odd n: ' + n);
//   return n != 0 && even(n - 1);
// }

const even = require('./even');

module.exports = function(n) {
  console.log('odd n: ' + n);
  return n != 0 && even(n - 1);
}