# Card Details Form Application

This is a simple React application that simulates a credit card details form. Users can input their card details, including the cardholder name, card number, expiration date, and CVC. Upon submission, a thank you message is displayed, and users can reset the form to its original state.

## Features

- **Input Fields**:
  - Cardholder Name
  - Card Number (auto-formatted with spaces every 4 digits)
  - Expiration Date (Month/Year)
  - CVC

- **Form Validation**:
  - Card Number: Accepts only up to 16 digits and formats the input with spaces every 4 digits.
  - Expiration Date and CVC: Limited to 2 digits for the month, year, and 3 digits for the CVC.

- **Form Submission**:
  - Displays a "Thank you" message after submitting the form.

- **Reset Functionality**:
  - Allows the user to reset the form and start over.

## Project Structure

```bash
src/
├── App.js            # Main component containing the form logic
├── LeftSideSection.js# Component for displaying card visuals
├── RightSideSection.js# Component containing the form inputs
└── ThankYouMessage.js # Component for displaying the thank you message after form submission
