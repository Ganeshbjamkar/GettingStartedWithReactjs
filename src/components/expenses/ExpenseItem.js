import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  const changeAmountHandler = () => {
    setAmount(100);
    console.log(amount);
  };

  const deleteHandler = () => {
    console.log("Deleted Item!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeAmountHandler}>Change Amount</button>
      <button onClick={deleteHandler}>Delete Item</button>
    </Card>
  );
};

export default ExpenseItem;
