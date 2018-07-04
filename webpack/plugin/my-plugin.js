const fs = require('fs');
const path = require('path');

function MyPlugin(options) {}

MyPlugin.prototype.apply = function (compiler) {
    // 1
    compiler.plugin("compile", function (params) {
        console.log("The compile is starting to compile...", params);
    });
    // 2
    compiler.plugin("compilation", function (compilation, params) {
        console.log("The compile is starting a new compilation...");
        // 4
        compilation.plugin("optimize", function () {
            console.log("The compilation is starting to optimize file...");
        });
    });
    // 3
    compiler.plugin("make", function (compiler, callback) {
        console.log("the compile is making file...");
        callback();
    });
    // 5
    compiler.plugin("after-compile", function (compilation, callback) {
        console.log("The compile has aleardy compiled");
        callback();
    });
    // 6
    compiler.plugin("emit", function (compilation, callback) {
        console.log("The compilation is going to emit files...");
        callback();
    });
    // 7
    compiler.plugin('after-emit', function (compilation, callback) {
        console.log('The compliation has aleardy emitted');
        callback();
    });
    compiler.plugin('done', function(stats) {
        console.log('All compilers have done.');
        const fileData = fs.readFileSync(path.join(path.resolve(__dirname), '../bundle.js'), {encoding: 'utf-8'});
        console.log(fileData);
        const prefix = '/*2018*/';
        const author = '/* ——By Zhinian Yang */';
        const finalFileData = `${prefix}\n${fileData}\n${author}`;
        fs.writeFileSync(
          path.join(path.resolve(__dirname), '../bundle.js'),
          finalFileData
        );
      })
};

module.exports = MyPlugin;