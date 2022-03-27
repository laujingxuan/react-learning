import "./Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter/ExpensesFilter";

// Error function syntax
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filterByYear = (year) => {
    setSelectedYear(year);
    props.onFiltered(year)
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onFilterYear={filterByYear} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
