import './ExpenseItem.css';

function ExpenseItem(props) {
 const month=props.date.toLocaleString('en-US', {month:'long'});
 const year=props.date.getFullYear();
 const day=props.date.toLocaleString('en-US',{day:'2-digit'}); 

  return (
    <div className="expense-item">
      <div>Month</div>
      <div>Year</div>
      <div>Day</div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
