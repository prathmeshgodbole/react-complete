import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div>
          <input type="text"></input>
          <input type="date"></input>
          <input type="number"></input>
        </div>
      </div>
      <button type='submit'></button>
    </form>
  );
};
export default ExpenseForm;
