import { Header } from "./Hader";
import { Description } from "./Description";
//import { createElement } from "react";
import React from 'react'

export const App = () => {

    // const headerComp = Header()
    // const descComp = Description()

    // const appElement = createElement(
    //     'div',
    //     null,
    //     [
    //         headerComp,
    //         createElement('hr'),
    //         descComp
    //     ]
    // )

    // const appElement = (
    //     <div>
    //         {headerComp}
    //         <hr />
    //         {descComp}
    //     </div>
    // )

    const appElement = (
        <div>
            <Header />
            <hr />
            <Description />
        </div>
    )

    return appElement
}