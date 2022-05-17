define(["./utils"], function (_utils) {
  "use strict";

  //const utilsExportables = require('./utils')
  function call() {
    // alert(utilsExportables.addFn(12, 3).toString())
    // alert(utilsExportables.subFn(12, 3).toString())
    alert((0, _utils.add)(12, 3).toString());
    alert((0, _utils.subtract)(12, 3).toString());
    alert((0, _utils.multiply)(12, 3).toString());
  }

  var btnObject = document.getElementById('btnClick');
  btnObject.addEventListener('click', call);
});