const Promise = require('./promise');

new Promise(function (resolve, reject) {
    resolve(1);
}).then(function (data) {
    console.log(data);
});