import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  ////------------Alternate option for conditioning--------------
  // let expensesContent = <p>No expenses found</p>
  // if (props.expenses.length >0 ){
  //   expensesContent = props.expenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <ul className="expenses-list">
      {props.expenses.length === 0 ? (
        <h2 className="expenses-list__fallback">Found no expenses</h2>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
      {/* {expensesContent} */}
    </ul>
  );
};

export default ExpensesList;
