define(function (require, exports, module) {
    var a = require('a');
    var b = require('b'); //引入模块

    var data1 = 1; //私有数据

    var fun1 = function () { //私有方法
        return a.run(data1);
    }

    exports.data2 = 2; //公有数据

    exports.fun2 = function () {
        return 'hello';
    }
})

