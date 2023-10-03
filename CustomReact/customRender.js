function customRender(reactElement, container){
    const domElement= document.createElement(reactElement.type)
    document.innerHTML= reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(dom)
}
const reactElement= {
    type: 'a',
    props: {
        href: 'www.google.com',
        target: '_blank'
    }, 
    children: "click to open"
}
const container=document.querySelector('#root')
customRender(reactElement, container)