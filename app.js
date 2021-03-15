import { BudgetForm } from "./components/budget/budget_form.js";
import { ExpenseForm } from "./components/expense/expense_form.js";

import { Budget } from "./components/budget/budget.js";
import { Expense } from "./components/expense/expense.js";



document.addEventListener('DOMContentLoaded', (event) => {

    new BudgetForm("budget_form", [
        {  
            value: "Please Enter Your Budget", 
            type: "number" 
        },

        {
            value: "Calculate",
            type: "button"
        }
    ]
    )

    new ExpenseForm("expanse_form", [
        {    
            value: "Please Enter Your Expense", 
            type: "text" 
        },

        {
            value: "Add Expense",
            type: "button"
        },

        {    
            value: "Please Enter Expense Amount", 
            type: "number" 
        },

    ]
    )

    new Budget("budget", { svg_icon:"local_atm-black-18dp.svg", budget_value: 0});
   // new Expense("expenses", { svg_icon: "gfg", expense_value: 0});

})