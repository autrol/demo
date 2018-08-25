// script/circle.js
define(['script/info'], function (info) {
    alert('info: ' + info);
    return function (text){
      alert(text || "circle");
    };
});