import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable></lable>
          <input type="text"/>
          <input type="date"></input>
          <input type="number"></input>
        </div>
      </div>
      <button type='submit'></button>
    </form>
  );
};
export default ExpenseForm;