const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();

    const LoginPage = require('../pages/LoginPages');
    const ProductsPage = require('../pages/productPages');
    const CartPage = require('../pages/CartPage');
    const CheckoutPage = require('../pages/CheckoutPage');

    this.loginPage = new LoginPage(this.page);
    this.productsPage = new ProductsPage(this.page);


    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
});

After(async function (scenario) {
    if (scenario.result.status === 'FAILED') {
        await this.page.screenshot({ path: `./screenshots/${Date.now()}.png` });
    }
    await this.browser.close();
});