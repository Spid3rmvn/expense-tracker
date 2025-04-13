import React from "react";
import { useState } from "react";

const ExpenseList = ({ expenses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <input
        type="text"
        placeholder="Search"
        className="searchExpense"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <ul>
          {filteredExpenses.map((expense) => (
            <li key={expense.id}>
              <strong>{expense.title}</strong> — Ksh{expense.amount} <br />
              <small>
                {expense.category} | {expense.date}
              </small>
              <p>{expense.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
