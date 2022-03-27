import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

// Error function syntax
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filterByYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onFilterYear={filterByYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
