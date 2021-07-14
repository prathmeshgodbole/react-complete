import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  // Best Way of Conditional Statement
  let expensesContent = <p>No Expences Item Found</p>;
  if (props.items.length > 0) {
    expensesContent =
  }
  return(
      <ul className='.expenses-list'>

      </ul>
  )
};
export default ExpensesList;
