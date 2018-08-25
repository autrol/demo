const Promise = require('./promise');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

new Promise(function (resolve, reject) {
    console.log('Promise resolve1');
    resolve(1);
}).then(function (data) {
    console.log('Promise then1');
});

new Promise(function (resolve, reject) {
    console.log('Promise resolve2');
    resolve(2);
}).then(function (data) {
    console.log('Promise then2');
});

console.log('outer');
