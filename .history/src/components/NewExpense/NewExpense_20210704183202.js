import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = () => {
  const saveExpenseDataHandler=(enteredEx)=>{

  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData/>
    </div>
  );
};
export default NewExpense;
