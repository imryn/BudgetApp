import {createElement} from "../../commons.js";

const BUDGET_VALUE_LOGO = "../../icons/attach_money-24px.svg";

export class Budget {

    constructor(selector, budget) {
        this.element = document.querySelector('.budget-app');
        this.budget = budget;
        this.selector = selector;
        this.budgetComponent = createElement("div",{class: selector});
        this.createBudgetComponent();
    }


    createBudgetComponent() {
        const title = createElement("span", {class:"budget_title"});
        title.innerHTML=this.selector;
        this.budgetComponent.append(title);

        const budgetIcon = createElement("img", {class:"budget_icon material-icons", src: `../../icons/${this.budget.svg_icon}`});
        this.budgetComponent.append(budgetIcon);

        const budgetValueLogo = createElement("img", {class: "budget_value_logo", src: BUDGET_VALUE_LOGO});

        const budgetValue = createElement("div", {class:"budget_value"});
        budgetValue.innerHTML=this.budget.budget_value;

        budgetValue.append(budgetValueLogo);

        this.budgetComponent.append(budgetValue);
        document.querySelector(".Budget_And_Expenses").append(this.budgetComponent);
    }
}