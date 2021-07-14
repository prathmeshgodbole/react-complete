import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <form>
      <div>
        <div>
          <input type="text"></input>
          <input type="date"></input>
          <input type="number" min='0.0.1'></input>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
