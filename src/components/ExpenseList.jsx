import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <input type="text" placeholder="Search" className="searchExpense" />

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
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
