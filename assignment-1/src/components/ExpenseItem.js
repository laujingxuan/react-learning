import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

// Function should be name with capital letter since in React, capital letter components are custom made components
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
