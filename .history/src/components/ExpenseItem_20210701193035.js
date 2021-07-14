import './ExpenseItem.css';

function ExpenseItem() {
  const ExpenseDate=new Date(2021,7,1);
  const ExpenseItem='Audi';
  const ExpensePrice
  return (
    <div className="expense-item">
      <div>July 1, 2021</div>
      <div className="expense-item__description">
        <h2>Audi</h2>
        <div className="expense-item__price">$50000</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
