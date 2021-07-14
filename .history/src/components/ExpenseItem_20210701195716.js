import './ExpenseItem.css';

function ExpenseItem(props) {
 
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{ExpenseTitle}</h2>
        <div className="expense-item__price">${ExpenseAmmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
