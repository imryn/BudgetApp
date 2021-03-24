import {createElement} from "../../commons.js";


export class CreateForm {

    values = {};

    constructor(target, config) {
        this.form = createElement(document.querySelector(target),{"onsubmit": "return false;"});
        this.config = config;
        this.createForm();
        this.createButtons();
    }

    
    createForm() {
        this.config.fields.forEach(field => {
            const fieldContainer = createElement("div", {class: `field_info` });
            const lables = createElement("label", {class: `field_label`});
            lables.innerText = field.label;
            const input = createElement("input", {type: field.type , name: field.name});
            input.addEventListener("input", (event) => {
                this.values[field.name]= event.target.value;
            });
            fieldContainer.append(lables);
            fieldContainer.append(input)
            this.form.append(fieldContainer);
         });
   }



    createButtons() {
        const button = createElement("button", {type: 'button' ,class: `submit_button`});
        button.innerText = this.config.onSubmit.text;
        button.addEventListener("click",()=>{
            this.config.onSubmit.onClick(this.values);
        });
        this.form.append(button);

    }

}