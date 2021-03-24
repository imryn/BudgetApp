export function createElement(elementType, attributes) {

    const element = typeof elementType === 'string' ? document.createElement(elementType) : elementType;

    for(let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    return element;
}

