const ExpenseDetails = (props) => {
  return (
    <div className="expense-details">
      <h2>{props.title}</h2>
      <div className="expense-amount">{props.amount}</div>
    </div>
  );
};

export default ExpenseDetails;
