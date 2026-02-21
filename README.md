# 🧪 QA Automation Framework -- SauceDemo (BDD)

## 📌 Overview

This project is a scalable BDD automation framework built to test:
https://www.saucedemo.com/

### 🔧 Tech Stack

-   Playwright
-   JavaScript (Node.js)
-   Cucumber (BDD)
-   Page Object Model (POM)

------------------------------------------------------------------------

## 📁 Project Structure

    saucedemo-bdd/
    ├── features/              # Gherkin feature files
    ├── steps/                 # Step definitions (No selectors here)
    ├── pages/                 # Page Objects (All locators + actions)
    ├── support/               # Hooks and DB utility
    ├── config/                # Environment configuration
    ├── testdata/              # JSON test data
    ├── .env.example
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## ⚙️ Setup Instructions

1.  Clone repository:

    ``` bash
    git clone <repository-url>
    cd saucedemo-bdd
    ```

2.  Ensure Node.js (v16+) is installed:

    ``` bash
    node -v
    npm -v
    ```

------------------------------------------------------------------------

## 📦 Install Dependencies

    npm install
    npx playwright install

------------------------------------------------------------------------

## ▶️ Run Tests

Run all tests:

    npm test

Run tagged tests:

    npx cucumber-js --tags "@smoke"

------------------------------------------------------------------------

## 🌐 Change Browser / Headless Mode

Create `.env` file:

    BASE_URL=https://www.saucedemo.com
    HEADLESS=true

To run browser in visible mode:

    HEADLESS=false

------------------------------------------------------------------------

## 🎯 Implemented Scenarios

### ✅ End-to-End Purchase Flow

-   Login
-   Add product
-   Cart validation
-   Checkout
-   Order confirmation

### ❌ Invalid Login Scenario

-   Invalid credentials
-   Error message validation

------------------------------------------------------------------------

## 🔍 Locator Strategy

### Robust (Implemented)

    [data-test="add-to-cart-sauce-labs-backpack"]

Why: - Stable - Designed for automation - Not DOM dependent

### Fallback

Text-based filtering using product name and role selector.

Avoided: - Index-based XPath - Long brittle chains

------------------------------------------------------------------------

## 🗄 Database Validation Design

Although SauceDemo does not provide DB access, a reusable DB utility is
included.

### Example SQL

    SELECT * FROM orders WHERE order_id = '12345';

### Validation Flow

1.  Complete order via UI
2.  Capture Order ID
3.  Query database
4.  Validate record exists
5.  Cleanup test data
6.  Retry logic for eventual consistency

------------------------------------------------------------------------

## 🧠 Engineering Notes

### Why this structure?

-   Separation of concerns
-   Reusable
-   Scalable
-   Industry-standard BDD pattern

### Wait Strategy

-   Playwright auto-wait
-   Assertion-based waits
-   No hard sleeps

### Scaling Strategy

-   Reusable steps
-   Tag execution
-   Parallel support
-   CI/CD integration

### CI/CD Execution

-   Headless mode
-   npm test
-   GitHub Actions workflow

### Improvements

-   Allure reporting
-   Docker support
-   Retry logic implementation

------------------------------------------------------------------------

## 📌 Assumptions

-   Test credentials remain stable.
-   Public site availability.
-   No real DB access required.

------------------------------------------------------------------------

## 🤖 AI Usage Disclosure

AI tools were used for structuring guidance and refinement. All
implementation was reviewed, modified, and validated manually.

------------------------------------------------------------------------

## ✅ Conclusion

This framework demonstrates clean BDD implementation, stability
practices, scalable architecture, and integration-ready design.
