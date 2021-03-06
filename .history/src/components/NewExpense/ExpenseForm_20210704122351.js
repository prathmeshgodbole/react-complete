import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChange

  return (
    <form>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <lable>Amount</lable>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <lable>Date</lable>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>

    </form>
  );
};
export default ExpenseForm;
