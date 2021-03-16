import {createElement} from "../../commons.js";
import { Expense } from "./expense.js";

export class ExpenseForm {

    constructor(componentName, expense) {
        this.element = document.querySelector('.budget-form-container');
        this.expense = expense;
        this.expenseForm  = createElement("form", {class: componentName, onsubmit:"return false;"});
        this.createForm();
        this.createButtons();
        this.expensesArray = [];
        this.addExpenseToExpensesList() 
    }

    createForm() {
        this.expense.find(item => {
           if(item.type === 'number') {
               this.createLablesAndInputs(item);

           } else if(item.type === 'text') {
               this.createLablesAndInputs(item);
           }
         })
        this.element.append(this.expenseForm);
   }

   createLablesAndInputs(item) {
    const divFormExpenseInfo = createElement("div", {class: "div_form_expense_info" });
    const lables = createElement("label", {class: "expense_form_label"});
    lables.innerHTML = item.value;
    const input = createElement("input", {type: item.type ,class: `${item.type}_${this.expenseForm.className}`, name: `${item.type}`});
    divFormExpenseInfo.append(lables);
    divFormExpenseInfo.append(input)

    this.expenseForm.append(divFormExpenseInfo);
  }

  createButtons() {
    this.expense.find(item => {
        if(item.type === 'button') {
            const button = createElement("button", {type: item.type, class: `${this.expenseForm.className}_submit`});
            button.innerText = item.value;
            this.expenseForm.append(button);
        }
    })
 }

 addExpenseToExpensesList() {
    const submitButton = document.querySelector(`.${this.expenseForm.className}_submit`);
    submitButton.addEventListener("click",() => {
        let expenseTitle = document.querySelector(".text_expanse_form").value;
        let expenseValue = document.querySelector(".number_expanse_form").value;

        if((expenseTitle !==null && expenseTitle.length !== 0) && (expenseValue!==0 && expenseValue!==undefined)) {
            this.expensesArray.push({expense_Title: expenseTitle, expense_Value: expenseValue});
             const element = document.querySelector(".Budget_And_Expenses");

             if(document.querySelector(".expenses")) {
                element.removeChild(document.querySelector(".expenses"));
             }
             new Expense("expenses", this.expensesArray);
        }
     
    });
 }

}