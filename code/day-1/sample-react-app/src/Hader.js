//import { createElement } from 'react'
import React from 'react'

const headerClicked = () => {
    console.log('header clicked')
}

export const Header = () => {

    const headerStyle = {
        backgroundColor: 'lime',
        fontFamily: 'Segoe UI'
    }
    // const headerDiv = createElement(
    //     'div',
    //     {
    //         id: 'headerDiv',
    //         style: headerStyle,
    //         onClick: headerClicked
    //     },
    //     "Welcome to Components"
    // )

    const headerDiv = (
        <div id='headerDiv' style={headerStyle} onClick={headerClicked}>
            Welcome to Components
        </div>
    )

    return headerDiv
}


