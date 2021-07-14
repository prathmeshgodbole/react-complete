import React from 'react';
import './ExpensesList.css';
const ExpensesList = () => {
// Best Way of Conditional Statement
let expensesContent = <p>No Expences Item Found</p>;
if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}

}
export default ExpensesList