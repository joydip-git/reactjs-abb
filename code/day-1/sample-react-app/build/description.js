define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.description = void 0;

  var descriptionHovered = function descriptionHovered() {
    alert('description div clicked');
  };

  var description = function description() {
    var descDiv = document.createElement('div');
    descDiv.setAttribute('id', 'descDiv');
    descDiv.setAttribute('style', "background-color:aqua; font-size:medium");
    descDiv.innerText = "Component is an unit of design plus code";
    descDiv.addEventListener('mouseover', descriptionHovered);
    return descDiv;
  };

  _exports.description = description;
});