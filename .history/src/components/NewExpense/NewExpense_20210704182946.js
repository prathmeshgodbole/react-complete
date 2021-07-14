import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpes/>
    </div>
  );
};
export default NewExpense;
