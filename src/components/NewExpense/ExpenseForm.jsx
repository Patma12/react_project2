import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...useState,
    //     enteredTite: event.target.value,
    // })

    // setUserInput((prevState) => {
    //     return {...prevState,enteredTitle: event.target.value };
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...useState,
    //     enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...useState,
    //     enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData={
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    console.log(expenseData);
  }

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label htmlFor="">
            Title
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          </label>
        </div>

        <div className="new-expense__controls">
          <label htmlFor="">
            Amount
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </label>
        </div>

        <div className="new-expense__controls">
          <label htmlFor="">
            Date
            <input
              type="date"
              min="2019-01-011"
              step="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
