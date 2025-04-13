import React from "react";
import { useState } from "react";

const AddExpense = () => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    description: "",
    amount: "",
    date: "",
  });
  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="expense-form">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={expense.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Enter Category"
          value={expense.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          value={expense.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          value={expense.amount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Enter Date"
          value={expense.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddExpense;
