import './ExpenseItem.css';

function ExpenseItem() {
 
  return (
    <div className="expense-item">
      <div>{ExpenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{ExpenseTitle}</h2>
        <div className="expense-item__price">${ExpenseAmmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
