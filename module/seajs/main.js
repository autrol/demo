//第一模式
seajs.use('./a');
//回调模式
seajs.use('./a', function (a) {
    a.run();
})
//多模块模式
seajs.use(['./a', './b'], function (a, b) {
    a.run();
    b.run();
})