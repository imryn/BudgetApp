import {createElement} from "../../commons.js";

export class ValueCard {

    constructor(target, config) {
        this.element = document.querySelector(target);
        this.config = config;
        this.createCard();
    }


    createCard() {
        const title = createElement("div", {class:"card_title"});
        title.innerText = this.config.title;

        const icon = createElement("img", {class:"material-icons card_icon", src: `../../icons/${this.config.img}`});

        const value = createElement("div", {class:"card_value"});
        value.innerText= this.config.value;

        this.element.append(title);
        this.element.append(icon);
        this.element.append(value);
    }

    setValue(value) {
        const elementValue = this.element.querySelector(".card_value");
        elementValue.innerText = value;
    }

}