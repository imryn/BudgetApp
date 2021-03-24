import { CreateForm } from "./createForm.js";
import { ValueCard } from "./components/valueCard/valueCard.js";
import { Table } from "./components/table/table.js";
import { tableConfig } from "./table_config.js";


document.addEventListener('DOMContentLoaded', (event) => {

    let expenses = [];
    const cardInstance = {
        budget : new ValueCard(".budget", {title: "Budget", img:"local_atm-black-18dp.svg", value: 0})
    };
    let budgetValue;

    new CreateForm(".budget_form", {
        fields: [
        {  
            label: "Please Enter Your Budget",
            name: "budget",
            type: "number" 
        },
      ],
      onSubmit:{
          text:'Calculate',
          onClick: (values) => {
              const {budget} = values;
              budgetValue = budget;
              expenses = [];
              resetValue("budget");
              resetValue("balance");
              resetValue("expense");
              resetValue("expensesTable", []);
              
            if(budget !== 0 && values.budget !== '') {
                cardInstance.budget.setValue(budget);
            } 
        }
      }
      
     }
    );

    new CreateForm(".expense_form", {
        fields: [
        {  
            label: "Please Enter Your Expense",
            name: "expense_name",
            type: "text" 
        },

        {    
            label: "Please Enter Expense Amount",
            name: "expense_value",
            type: "number" 
        },
      ],

      onSubmit: {
        text: "Add Expense",
        onClick: (values) => {
            const expenseTitle = values.expense_name;
            const expenseValue = values.expense_value;
    
            if((expenseTitle !==null && expenseTitle.length !== 0) && (expenseValue!==0 && expenseValue!==undefined)) {
                expenses.push({title: expenseTitle, value: expenseValue});
                const sumOfExpenses = expenses.reduce((acc,item)=> acc + parseInt(item.value), 0);

                cardInstance.expense = cardInstance.expense ||  new ValueCard(".expense", {title: "Expenses", img:"../../icons/credit_card-24px.svg", value: sumOfExpenses});
                cardInstance.expense.setValue(sumOfExpenses);

                const balanceValue = parseInt(budgetValue) - sumOfExpenses;

                cardInstance.balance = cardInstance.balance ||  new ValueCard(".balance", {title: "Balance", img: "../../icons/attach_money-24px.svg", value: balanceValue});
                cardInstance.balance.setValue(balanceValue);
                
                cardInstance.expensesTable = cardInstance.expensesTable || new Table(".expenses_table", expenses, tableConfig);
                cardInstance.expensesTable.setValue(expenses);
            }
          }
      }
     
    })


   function resetValue(name, value = 0) {
        if(cardInstance[name]) {
            cardInstance[name].setValue(value);
        } 
    }
  
})