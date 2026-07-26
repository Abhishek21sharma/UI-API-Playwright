import { Page, Locator } from "@playwright/test";

export class MyCartPage {
  readonly page: Page;
  readonly cartButton: Locator;
  readonly pageHeading: Locator;
  readonly continueShoppingBtn: Locator;
  readonly checkoutBtn: Locator;
  readonly subTotal: Locator;
  readonly total: Locator;
  readonly cartItemRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartButton = this.page.locator('button[routerlink="/dashboard/cart"]');
    this.pageHeading = this.page.getByRole("heading", { name: /my cart/i });

    this.continueShoppingBtn = this.page.getByRole("button", {
      name: /continue shopping/i,
    });

    this.checkoutBtn = this.page.getByRole("button", {
      name: "Checkout",
      exact: true,
    });

    this.cartItemRows = this.page.locator("div.cart");

    this.subTotal = this.page
      .locator("li.totalRow")
      .filter({ hasText: "Subtotal" })
      .locator("span.value");

    this.total = this.page
      .locator("span.value:right-of(:text('Total'))")
      .first();
  }

  async navToCart() {
    await this.cartButton.click();
  }

  /**
   * Pinpoints a specific cart row by matching the exact product name inside it.
   */
  getCartRowByName(productName: string): Locator {
    return this.cartItemRows.filter({
      has: this.page.getByText(productName, { exact: true }),
    });
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
