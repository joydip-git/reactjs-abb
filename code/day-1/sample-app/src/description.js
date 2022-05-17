const descriptionHovered = () => {
    alert('description div clicked')
}
export const description = () => {
    var descDiv = document.createElement('div')
    descDiv.setAttribute('id', 'descDiv')
    descDiv.setAttribute('style', "background-color:aqua; font-size:medium")
    descDiv.innerText = "Component is an unit of design plus code"
    descDiv.addEventListener('mouseover', descriptionHovered)

    return descDiv
}