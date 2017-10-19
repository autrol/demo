// // src/main.js
// import foo from './foo.js';
// export default function () {
//   console.log(foo);
// }   

// src/main.js
import { version } from '../package.json';

function main () {
  console.log('version ' + version);
}

main();
