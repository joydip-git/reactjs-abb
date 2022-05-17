define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.add = add;
  _exports.multiply = multiply;
  _exports.subtract = subtract;

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  } // module.exports = {
  //     addFn: add,
  //     subFn: subtract
  // }

});