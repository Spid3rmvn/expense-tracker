import React from "react";

const AddExpense = () => {
  return (
    <div className="ExpenseFormContainer">
      <h2>Add Expense</h2>
      <p>Enter your expense details below</p>

      <form>
        <input type="text" placeholder="Enter Expense Name" />
        <input type="text" placeholder="Eneter Expense Description" />
        <input type="text" placeholder="Enter Expense Category" />
        <input type="number" placeholder="Enter Expense Amount" />
        <input type="date" placeholder="Expense Date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddExpense;
