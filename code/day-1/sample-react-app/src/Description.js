//import { createElement } from "react"
import React from 'react'

export const Description = () => {
    const descriptionHovered = () => {
        alert('description div clicked')
    }

    // const descDiv = createElement(
    //     'div',
    //     {
    //         id: 'descDiv',
    //         style: {
    //             backgroundColor: 'aqua',
    //             fontSize: 'medium'
    //         },
    //         onMouseOver: descriptionHovered
    //     },
    //     "Component is an unit of design plus code"
    // );  

    const descDiv = (
        <div id="descDiv" style={{ backgroundColor: 'aqua', fontSize: 'medium' }} onMouseOver={descriptionHovered}>
            Component is an unit of design plus code
        </div>
    )

    return descDiv
}