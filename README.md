# Investment Calculator
An interactive React-based application that calculates the investment growth over a period of time based on user inputs. The app allows users to input initial investment, annual contributions, expected return rate, and investment duration to view detailed results.

# Table of Contents
# Features
💠Input fields for:
•Initial Investment

•Annual Contribution

•Expected Return Rate

•Investment Duration

•Instant validation for input fields (e.g., duration must be greater than 0).

💠Displays a results table with:

•Yearly breakdown of investment value.

•Annual and total interest earned.

•Total invested capital.

•Responsive and user-friendly interface.

•Real-time calculations as users update inputs.

# Getting Started
## Prerequisites
## Ensure you have the following installed:

Node.js (v16 or higher)
npm (Node Package Manager)

# Installation
1.Clone the Repositry:
```
git clone https://github.com/your-username/investment-calculator.git
```

2.Navigate into the repository folder
```
cd repository
```
3.Install dependencies
```
npm install
```
4.Start the development server:
```
npm run dev
```
5.Open your browser and go to:
```
http://localhost:3000
```
# Usage
## Enter the following details in the input form:

•Initial Investment: The amount of money you start with.

•Annual Contribution: Additional money added every year.

•Expected Return Rate: The annual growth rate percentage.

•Duration: The number of years you plan to invest.

•If the inputs are valid, the results table will display:

•Year-by-year breakdown of your investment.

•Total interest earned.

•Total amount invested.


•If the input duration is invalid (e.g., less than 1), an error message will prompt you to correct it.

# Project Structure
```
investment-calculator/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── UserInput.jsx
│   │   ├── Results.jsx
│   ├── util/
│   │   ├── investment.js    # Utility functions for calculations and formatting
│   ├── App.jsx
│   ├── index.css            # Global styling
│   ├── index.js
├── package.json
├── README.md
```
