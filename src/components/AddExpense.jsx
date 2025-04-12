import React from "react";

const AddExpense = () => {
  return (
    <div className="ExpenseHeader">
      <h1>Add Expense</h1>
      <p>Enter your expense details below</p>
      <div className="AddExpenseForm">
        <form>
          <input type="text" placeholder="Expense Name" />
          <input type="number" placeholder="Expense Amount" />
          <input type="text" placeholder="Expense Category" />
          <input type="date" placeholder="Expense Date" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
