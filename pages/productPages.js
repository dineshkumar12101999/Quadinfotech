class ProductsPage {
    constructor(page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.backpackAddBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addBackpack() {
        await this.backpackAddBtn.click();
    }

    async verifyProductsPage() {
        await this.page.waitForURL('**/inventory.html');
    }

    async addProduct(productName) {
        const formattedName = productName.toLowerCase().replace(/ /g, "-");

        await this.page
            .locator(`[data-test="add-to-cart-${formattedName}"]`)
            .click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = ProductsPage;