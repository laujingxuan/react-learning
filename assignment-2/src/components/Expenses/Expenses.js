import "./Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter/ExpensesFilter";

// Error function syntax
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("");
  const filterByYear = (year) => {
    setSelectedYear(year);
    console.log(year);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onFilterYear={filterByYear} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
