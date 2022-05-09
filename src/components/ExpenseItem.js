import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2022, 4, 9);
  const expenseTitle = 'Car Insurance';
  const expenseAmout = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{expenseAmout}</div>
    </div>);
}

export default ExpenseItem;