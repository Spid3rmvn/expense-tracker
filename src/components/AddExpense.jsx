import React, { useState } from "react";

const AddExpense = ({ onAddExpense }) => {
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

    // Basic validation
    if (!expense.title || !expense.amount || !expense.date) {
      alert("Please fill in required fields (title, amount, date).");
      return;
    }

    // Add the expense (send to parent)
    const newExpense = {
      ...expense,
      id: Date.now(), // Add unique ID
    };

    onAddExpense(newExpense); // Callback to parent component

    // Reset form
    setExpense({
      title: "",
      category: "",
      description: "",
      amount: "",
      date: "",
    });
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
        />
        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          value={expense.description}
          onChange={handleChange}
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
