import { Header } from "./Hader";
import { Description } from "./Description";
import { createElement } from "react";

export const App = () => {
    const headerComp = Header()
    const descComp = Description()

    // const appElement = document.createElement('div')
    // appElement.appendChild(headerComp)
    // appElement.appendChild(document.createElement('hr'))
    // appElement.appendChild(descComp)

    const appElement = createElement(
        'div',
        null,
        [
            headerComp,
            createElement('hr'),
            descComp
        ]
    )

    return appElement
}