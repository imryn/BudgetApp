import {createElement} from "../../commons.js";
import { tableConfig } from '../../table_config.js';
import { Balance } from '../balance/balance.js';

const EXPENSEICON = "../../icons/credit_card-24px.svg";
const EXPENSE_VALUE_LOGO = "../../icons/attach_money-24px.svg";

export class Expense {

    constructor(selector, expenses) {
        this.element = document.querySelector('.container');
        this.expenses = expenses;
        this.selector = selector;
        this.expenseComponent = createElement("div",{class: selector});
        this.table = createElement("table", {class: "expenses-table"});
        this.createExpenseComponent();
        this.createHeader();
        this.createBody();
    }


   createExpenseComponent() {
        const title = createElement("span", {class:"expense_title"});
        let sumOfExpenses = 0;

        title.innerHTML=this.selector;
        this.expenseComponent.append(title);

        const expenseIcon = createElement("img", {class:"expense_icon material-icons", src: EXPENSEICON});
        this.expenseComponent.append(expenseIcon);

        const expenseValueLogo = createElement("img", {class: "expense_value_logo", src: EXPENSE_VALUE_LOGO});

        const expenseValue = createElement("div", {class:"expense_value"});
        const BudgetAndExpensesComponent = document.querySelector(".Budget_And_Expenses");

         this.expenses.forEach((item) => {
             sumOfExpenses = sumOfExpenses + parseInt(item.expense_Value);
         });
        
         expenseValue.innerHTML=sumOfExpenses;

         expenseValue.append(expenseValueLogo);

         this.expenseComponent.append(expenseValue);
         BudgetAndExpensesComponent.append(this.expenseComponent);

         this.element.append(BudgetAndExpensesComponent);

         this.sendExpenseToBalance(sumOfExpenses);
   }

    createHeader() {
        const thead = document.createElement("thead");
        this.table.append(thead);

        const tr = document.createElement("tr");

        tableConfig.forEach((item) => {
            const td = document.createElement("td");
            td.innerText = item.headerName;
            tr.append(td);
        })

        thead.append(tr);
    }

    createBody() {
          const tbody = document.createElement("tbody");

          if(document.querySelector(".expenses-table")) {
            const element = document.querySelector(".budget-app");
            element.removeChild(document.querySelector(".expenses-table"));
          }

        this.expenses.forEach(item => {
            this.putValueInTD(item, tbody);
        });

        const currentBodyElement = this.table.querySelector("tbody");

        if (currentBodyElement) {
            currentBodyElement.replaceWith(tbody);
        }
        else {
            this.table.append(tbody);
            document.querySelector(".budget-app").append(this.table);
        }

    }

    putValueInTD(item, tbody) {
        const tr = createElement("tr");

        for(let key in item) {
            const td = createElement("td", {class: "expense_td"});
            td.innerText = item[key];
            tr.append(td);
        }
        tbody.append(tr);
    }

    sendExpenseToBalance(sumOfExpenses) {
        const element = document.querySelector(".Budget_And_Expenses");
        if(document.querySelector(".balances")) {
            element.removeChild(document.querySelector(".balances"));
        }
        new Balance("balances", sumOfExpenses);
    }
}