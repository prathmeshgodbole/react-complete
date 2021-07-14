import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm onsa/>
    </div>
  );
};
export default NewExpense;
