import {createElement} from "../../commons.js";

const BUDGET_VALUE_LOGO = "../../icons/attach_money-24px.svg";

export class Budget {

    constructor(componentName, budget) {
        this.element = document.querySelector('.budget-app');
        this.budget = budget;
        this.componentName = componentName;
        this.budgetComponent = createElement("div",{class: componentName});
        this.createBudgetComponent();
    }


    createBudgetComponent() {
        const title = createElement("span", {class:"budget_title"});
        title.innerText=this.componentName;
        this.budgetComponent.append(title);

        const budgetIcon = createElement("img", {class:"budget_icon material-icons", src: `../../icons/${this.budget.svg_icon}`});
        this.budgetComponent.append(budgetIcon);

        const budgetValueLogo = createElement("img", {class: "budget_value_logo", src: BUDGET_VALUE_LOGO});

        const budgetValue = createElement("div", {class:"budget_value"});
        budgetValue.innerText=this.budget.budget_value;

        budgetValue.append(budgetValueLogo);

        this.budgetComponent.append(budgetValue);
        document.querySelector(".Budget_And_Expenses").append(this.budgetComponent);
    }
}