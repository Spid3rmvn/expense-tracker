import React from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  return (
    <>
      <div className="app-container">
        <h1>Expense Tracker</h1>
        <div className="main-content">
          <AddExpense onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
};

export default App;
