import { header } from "./header";
import { description } from "./description";

export const app = () => {
    var headerComp = header()
    var descComp = description()

    var appElement = document.createElement('div')
    appElement.appendChild(headerComp)
    appElement.appendChild(document.createElement('hr'))
    appElement.appendChild(descComp)

    return appElement
}