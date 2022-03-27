import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const [isAddNew, setIsAddNew] = useState(false);

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: +event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    //   setEnteredDate(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //   const expenseData = {
    //       title: enteredTitle,
    //       amount: enteredAmount,
    //       date: new Date(enteredDate)
    //   }
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setIsAddNew(false);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  const handleUpdateIsAddNew = () => {
    setIsAddNew((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      {isAddNew === false ? (
        <div className="new-expense__actions centered">
          <button onClick={handleUpdateIsAddNew}>Add New Expense</button>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={userInput.enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={userInput.enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={userInput.enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={handleUpdateIsAddNew}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;