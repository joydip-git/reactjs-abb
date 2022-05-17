import { createElement } from 'react'

const headerClicked = () => {
    console.log('header clicked')
}

export const Header = () => {
    // const headerDiv = document.createElement('div')
    // headerDiv.setAttribute('id', 'headerDiv')
    // headerDiv.setAttribute('style', "background-color:lime;font-family:'Segoe UI'")
    // headerDiv.innerText = "Welcome to Components"
    // headerDiv.addEventListener('click', headerClicked)

    const headerStyle = {
        backgroundColor: 'lime',
        fontFamily: 'Segoe UI'
    }
    const headerDiv = createElement(
        'div',
        {
            id: 'headerDiv',
            style: headerStyle,
            onClick: headerClicked
        },
        "Welcome to Components"
    )

    return headerDiv
}


