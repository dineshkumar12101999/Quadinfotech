class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutBtn = page.locator('[data-test="checkout"]');
    }

    async clickCheckout() {
        await this.checkoutBtn.click();
    }
}

module.exports = CartPage;