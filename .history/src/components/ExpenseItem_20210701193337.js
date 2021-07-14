import './ExpenseItem.css';

function ExpenseItem() {
  const ExpenseDate=new Date(2021,7,1);
  const ExpenseTitle='Audi';
  const ExpenseAmmount=50000;

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
