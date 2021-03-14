
export function createElement(elementType, attributes) {

    const element = document.createElement(elementType);

    for(let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    return element;
}