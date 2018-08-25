require.config({
    baseUrl: 'js',
});

require(['script/info', 'script/test'], function (info, test) {
    info();
    test();
});