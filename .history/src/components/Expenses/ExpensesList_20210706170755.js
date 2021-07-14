import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  // Best Way of Conditional Statement
  let expensesContent = <p>No Expences Item Found</p>;
  if (props.items.length === 0) {
return(<h2 className></h2>)  
}
  return(
      <ul className='.expenses-list'>
{props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
      </ul>
  )
};
export default ExpensesList;
