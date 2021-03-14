import {createElement} from "../../commons.js";

const BALANCEPIC = "../../icons/attach_money-24px.svg";

export class Balance {

    constructor(selector, sumOfExpenses) {
        this.element = document.querySelector(".Budget_And_Expenses");
        this.selector = selector;
        this.balanceComponent = createElement("div",{class: selector});
        this.sumOfExpenses = sumOfExpenses;
        this.createBalanceComponent();
    }

    createBalanceComponent() {

        const title = createElement("span", {class:"balance_title"});
        const BudgetAndExpensesComponent = document.querySelector(".Budget_And_Expenses");

        title.innerHTML=this.selector;
        this.balanceComponent.append(title);

        const balnceIcon = createElement("img", {class:"balance_icon material-icons", src: BALANCEPIC});

        this.balanceComponent.append(balnceIcon);

        const balanceValueLogo = createElement("img", {class: "balance_value_logo", src: BALANCEPIC});
        const balanceValue = createElement("div", {class:"balance_value"});

        balanceValue.innerHTML = parseInt(document.querySelector(".budget_value").innerText) - this.sumOfExpenses;
        balanceValue.append(balanceValueLogo);

        this.balanceComponent.append(balanceValue);
        BudgetAndExpensesComponent.appendChild(this.balanceComponent);
    }
}