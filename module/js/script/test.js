// script/test.js
define(['script/circle'], function (circle) {
    circle('test circle');
    return function () {
      alert("test");
    };
});