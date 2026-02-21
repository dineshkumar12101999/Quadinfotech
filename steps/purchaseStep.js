const { When, Then } = require('@cucumber/cucumber');
const ProductsPage = require('../pages/productPages');
const CartPage = require('../pages/CartPage.js');
const CheckoutPage = require('../pages/CheckoutPage.js');

When('I add {string} to the cart', async function (productName) {
    await this.productsPage.addProduct(productName);
});

When('I checkout with valid customer details', async function () {
    await this.productsPage.goToCart();
    await this.cartPage.clickCheckout();
    await this.checkoutPage.enterCustomerDetails('Dinesh', 'Kumar', '560001');
    await this.checkoutPage.finishOrder();
});

Then('I should see the order confirmation page', async function () {
    await this.checkoutPage.verifyOrderConfirmation();
});