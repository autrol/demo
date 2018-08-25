// ES6根本不会关心是否发生了"循环加载"，只是生成一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
import {foo} from './m1.js';
console.log(foo);
setTimeout(() => console.log(foo), 500);