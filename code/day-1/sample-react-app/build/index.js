define(["./app"], function (_app) {
  "use strict";

  var completeAppDesign = (0, _app.app)();
  var root = document.getElementById('root');
  console.log(completeAppDesign);
  root.appendChild(completeAppDesign);
});