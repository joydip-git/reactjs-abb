const headerClicked = () => {
    console.log('header clicked')
}

export const header = () => {
    const headerDiv = document.createElement('div')
    headerDiv.setAttribute('id', 'headerDiv')
    headerDiv.setAttribute('style', "background-color:lime;font-family:'Segoe UI'")
    headerDiv.innerText = "Welcome to Components"
    headerDiv.addEventListener('click', headerClicked)

    return headerDiv
}


