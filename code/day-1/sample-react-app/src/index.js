import { App } from "./App";
import { render } from 'react-dom'

const completeAppDesign = App()
const root = document.getElementById('root')
// console.log(completeAppDesign)
// root.appendChild(completeAppDesign)
render(completeAppDesign, root)







