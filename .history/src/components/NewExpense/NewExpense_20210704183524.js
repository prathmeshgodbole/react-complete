import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = () => {
  const saveExpenseDataHandler=(enteredExpenseData)=>{
const expenseData={
  ...enteredExpenseData,
  id:Math.random.toString()
};
consol
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData/>
    </div>
  );
};
export default NewExpense;
