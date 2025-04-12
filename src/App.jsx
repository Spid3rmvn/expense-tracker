import React from "react";
import AddExpense from "./components/AddExpense";
import SearchBar from "./components/SearchBar";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <p>
          Start taking control of your finances and life.Record cartegorize and
          analyze your spending.
        </p>
      </div>
      <AddExpense />
      <SearchBar />
      <ExpenseList />
    </>
  );
};

export default App;
