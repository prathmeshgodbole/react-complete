import './ExpenseItem.css';

function ExpenseItem() {
  const ExpenseDate=new Date(2021,7,1);
  const ExpenseTitle='Audi';
  const ExpensePrice=50000;

  return (
    <div className="expense-item">
      <div>{ExpenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{ExpenseItem}</h2>
        <div className="expense-item__price">${ExpensePrice}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
