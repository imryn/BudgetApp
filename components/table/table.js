import {createElement} from "../../commons.js";

export class Table {

    constructor(target, data, tableConfig) {
        this.element = document.querySelector(target);
        this.data = data;
        this.tableConfig = tableConfig;
        this.createHeader();
        this.createBody();
    }

   createHeader() {
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");

        this.tableConfig.forEach((item) => { 
                const td = document.createElement("td");
                td.innerText = item.headerName;
                tr.append(td);
            
        });
        thead.append(tr);
        this.element.append(thead);
    }

    createBody() {
        const tbody = document.createElement("tbody");

        this.data.forEach(item => {
            const tr = createElement("tr");

            for(let key in item) {
                const td = createElement("td", {class: "table_column"});
                td.innerText = item[key];
                tr.append(td);
            }
            tbody.append(tr);
        });

        const currentBodyElement = this.element.querySelector("tbody");

        if (currentBodyElement) {
            currentBodyElement.replaceWith(tbody);
        }
        else {
            this.element.append(tbody);
        }

    }

    setValue(data) {
        this.data = data;
        this.createBody();
    }

}