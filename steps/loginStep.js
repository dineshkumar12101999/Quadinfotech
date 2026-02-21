const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the login page', async function () {
    await this.page.goto(process.env.BASE_URL);
});

When('I login as a standard user', async function () {
    await this.loginPage.login('standard_user', 'secret_sauce');
});

When('I attempt login with invalid credentials', async function () {
    await this.loginPage.login('invalid_user', 'wrong_password');
});

Then('I should see the products page', async function () {
    await this.productsPage.verifyProductsPage();
});

Then('I should see an authentication error message', async function () {
    await this.loginPage.verifyLoginError();
});