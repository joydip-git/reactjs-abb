import { createElement } from "react"
const descriptionHovered = () => {
    alert('description div clicked')
}
export const Description = () => {
    // var descDiv = document.createElement('div')
    // descDiv.setAttribute('id', 'descDiv')
    // descDiv.setAttribute('style', "background-color:aqua; font-size:medium")
    // descDiv.innerText = "Component is an unit of design plus code"
    // descDiv.addEventListener('mouseover', descriptionHovered)

    const descDiv = createElement(
        'div',
        {
            id: 'descDiv',
            style: {
                backgroundColor: 'aqua',
                fontSize: 'medium'
            },
            onmouseover: descriptionHovered
        }
    );

    return descDiv
}