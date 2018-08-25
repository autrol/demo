// script/circle.js
define(['script/circle'], function (circle) {
    circle('info circle');
    return function (){
      alert("欢迎访问 hangge.com");
    };
});