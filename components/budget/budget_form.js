import {createElement} from "../../commons.js";
import { Budget } from "./budget.js";

export class BudgetForm {

    constructor(selector, budget) {

        this.element = document.querySelector('.budget-form-container');
        this.budget = budget;
        this.budgetForm  = createElement("form", {class: selector, onsubmit:"return false;"});
        this.container = createElement("div", {class: "container"});
        this.BudgetAndExpensesComponent = createElement("div", {class: "Budget_And_Expenses"});

        this.createForm();
        this.createButtons();
        this.sendBudgetValueToBudgetComponent();
    }

    createForm() {
         this.budget.find(item => {
            if(item.type === 'number') {
                this.createLablesAndInputs(item);

            } else if(item.type === 'text') {
                this.createLablesAndInputs(item);
            }
          })
          document.querySelector(".budget-app").append(this.container);
          
         this.element.append(this.budgetForm);
         this.container.append(this.element);
         this.container.append(this.BudgetAndExpensesComponent);
    }

    createLablesAndInputs(item) {
        const divFormBudgetInfo = createElement("div", {class: "div_form_budget_info" });
        const lables = createElement("label", {class: "budget_form_label"});
        lables.innerHTML = item.value;
        const input = createElement("input", {type: item.type ,class: `${item.type}_${this.budgetForm.className}_input`, name: `${item.type}`});
        divFormBudgetInfo.append(lables);
        divFormBudgetInfo.append(input)

        this.budgetForm.append(divFormBudgetInfo);
    }

     createButtons() {
        this.budget.find(item => {
            if(item.type === 'button') {
                const button = createElement("button", {type: item.type, class: `${this.budgetForm.className}_button`});
                button.innerHTML = item.value;
                this.budgetForm.append(button);
            }
        })

     }

     sendBudgetValueToBudgetComponent() {
        const submitButton = document.querySelector('.budget_form_button');
        submitButton.addEventListener("click",() => {
            let budgetValue = document.querySelector(".number_budget_form_input").value;
            const element = document.querySelector(".Budget_And_Expenses");
            element.removeChild(document.querySelector(".budget"));

            new Budget("budget", { svg_icon: "local_atm-black-18dp.svg", budget_value: budgetValue});
        });

     }

}