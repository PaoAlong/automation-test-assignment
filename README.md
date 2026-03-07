# Playwright Automation - SauceDemo

## Overview

This project contains an end-to-end automated test for the SauceDemo application using Playwright.

The test covers the complete flow from login to placing an order.

## Setup

Install project dependencies:

npm install

## Environment Variables

Create a `.env` file in the project root with the following values:

saucedemo_TEST=https://www.saucedemo.com/
USERNAME_TEST=standard_user
PASSWORD_TEST=secret_sauce

## Run Tests

Run all tests:

npx playwright test

Run a specific project:

npx playwright test --project=E2E

## View Report

After running the tests, open the HTML report:

npx playwright show-report

## Assumptions

- The test uses the `standard_user` account provided by SauceDemo.
- Credentials are stored in a `.env` file.
- Playwright HTML reporter is enabled to view test results.

---

# End-to-End Scenario: Place an Order Successfully

## Scenario Description

Verify that a user can complete a full purchase journey, from logging in to logging out, on the Sauce Demo website.

## Test Flow

### 1. Login
- Navigate to the login page
- Log in using valid credentials

**Expected Result**
- The product listing page is displayed

---

### 2. Select Products
- Add at least **two different products** to the shopping cart

**Expected Result**
- The cart reflects the selected items

---

### 3. Review Cart
- Navigate to the cart page

**Expected Result**
- Selected products are visible with correct details

---

### 4. Checkout
- Proceed through the checkout process
- Provide valid customer information

**Expected Result**
- User can reach the checkout overview page

---

### 5. Verify Pricing
- Review pricing information before completing the order

**Expected Result**
- Pricing information is presented clearly and consistently

---

### 6. Complete Order
- Finalize the checkout

**Expected Result**
- Order completion confirmation is displayed

---

### 7. Logout
- Log out from the application

**Expected Result**
- User is returned to the login page