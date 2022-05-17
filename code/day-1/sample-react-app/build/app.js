define(["exports", "./header", "./description"], function (_exports, _header, _description) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.app = void 0;

  var app = function app() {
    var headerComp = (0, _header.header)();
    var descComp = (0, _description.description)();
    var appElement = document.createElement('div');
    appElement.appendChild(headerComp);
    appElement.appendChild(document.createElement('hr'));
    appElement.appendChild(descComp);
    return appElement;
  };

  _exports.app = app;
});