import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text"/>
          </div>
          <input type="date"></input>
          <input type="number"></input>
        </div>
      </div>
      <button type='submit'></button>
    </form>
  );
};
export default ExpenseForm;
