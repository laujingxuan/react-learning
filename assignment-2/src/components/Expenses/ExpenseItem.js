import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// Function should be name with capital letter since in React, capital letter components are custom made components
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickeHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickeHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
