function customRender(reactElement, container){
    const domElement= document.createElement(reactElement.type)
    document.innerHTML= reactElement.children
   for(const prop in reactElement.props){
    if(prop=='children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   
    container.appendChild(domElement)
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