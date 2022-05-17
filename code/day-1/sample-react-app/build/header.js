define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.header = void 0;

  var headerClicked = function headerClicked() {
    console.log('header clicked');
  };

  var header = function header() {
    var headerDiv = document.createElement('div');
    headerDiv.setAttribute('id', 'headerDiv');
    headerDiv.setAttribute('style', "background-color:lime;font-family:'Segoe UI'");
    headerDiv.innerText = "Welcome to Components";
    headerDiv.addEventListener('click', headerClicked);
    return headerDiv;
  };

  _exports.header = header;
});