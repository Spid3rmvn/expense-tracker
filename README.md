Expense Tracker App
This is a simple Expense Tracker app that allows users to add expenses and view a list of expenses.

Features
Add new expenses
View list of expenses
Search expenses
Installation
Clone the repository
Open the project in your code editor
Update the styles in the App.css file
Add any additional functionality you need
Usage
Open the index.html file in your browser
Use the "Add Expense" form to add new expenses
View the list of expenses on the right side
Use the search bar to search for specific expenses
Contributing
Feel free to contribute to this project by submitting a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

# Expense Tracker Application

## Overview

This is a simple expense tracker application built with React. It allows users to:

- Add new expenses with details like title, category, description, amount, and date
- View a list of all expenses
- Search through expenses by title

## Components

### 1. AddExpense.jsx

A form component for adding new expenses with the following fields:

- Title (text input, required)
- Category (text input, required)
- Description (text input, required)
- Amount (number input, required)
- Date (date picker, required)

Features:

- Form validation to ensure all fields are filled
- Generates a unique ID for each new expense
- Calls the `onAddExpense` prop function when submitted

### 2. ExpenseList.jsx

Displays a list of expenses with search functionality.

Features:

- Search bar to filter expenses by title (case-insensitive)
- Shows "No expenses found" if search yields no results
- Displays each expense with title, amount, category, date, and description

## Installation and Usage

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the application: `npm start`

## Dependencies

- React
- React DOM

## Future Improvements

- Add expense editing/deletion
- Category filtering
- Charts for visualization
- Local storage for data persistence
