// const your = require('./your');
require('./your');
require('./your').message = 'message';
console.log(require('./your'));
const jquery = require('jquery');

console.log(require.cache['/Users/yangzhinian/github/demo/zepto/your.js']);
// console.log(your);
// console.log(require.resolve());