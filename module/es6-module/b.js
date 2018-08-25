// b.js
import {foo} from './a.js';
export function bar() {  
    // 不加if判断会死循环
  if (Math.random() > 0.5) {
    foo();
  }
}