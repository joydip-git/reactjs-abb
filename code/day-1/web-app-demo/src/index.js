//const utilsExportables = require('./utils')
import { add, multiply, subtract } from './utils'

function call() {
    // alert(utilsExportables.addFn(12, 3).toString())
    // alert(utilsExportables.subFn(12, 3).toString())
    alert(add(12, 3).toString())
    alert(subtract(12, 3).toString())
    alert(multiply(12, 3).toString())
}

var btnObject = document.getElementById('btnClick')
btnObject.addEventListener('click', call)