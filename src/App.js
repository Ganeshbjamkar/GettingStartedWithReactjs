import React from "react";
import ExpenseItem from "./components/expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpensse";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Clothes",
      amount: 44.55,
      date: new Date(2023, 9, 21),
    },
    { id: "e2", title: "Mobile", amount: 300.48, date: new Date(2023, 10, 18) },
    {
      id: "e3",
      title: "Bike Insurance",
      amount: 298.9,
      date: new Date(2023, 10, 28),
    },
    {
      id: "e4",
      title: "Table",
      amount: 150,
      date: new Date(2023, 10, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
};

export default App;
