// App.js
import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 300.65,
      date: new Date(2023, 8, 20),
      locationofexpenditure: "Online Insurance Company",
    },
    {
      id: "e2",
      title: "Restaurant",
      amount: 700,
      date: new Date(2023, 8, 20),
      locationofexpenditure: "Hotel",
    },
    {
      id: "e3",
      title: "Taxi",
      amount: 400,
      date: new Date(2023, 8, 20),
      locationofexpenditure: "Travel",
    },
    {
      id: "e4",
      title: "Grocery",
      amount: 200,
      date: new Date(2023, 8, 20),
      locationofexpenditure: "Shop",
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationofexpenditure={expense.locationofexpenditure}
        />
      ))}
    </div>
  );
}

export default App;
