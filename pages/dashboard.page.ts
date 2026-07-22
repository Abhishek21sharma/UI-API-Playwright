import { Locator, Page, expect } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly productCards: Locator;

  //constant so in BOLD LETTERS
  private readonly BTN_ADD_TO_CART = "Add To Cart";

  constructor(page: Page) {
    this.page = page;
    this.productCards = this.page.locator(
      "#products .container .row .card-body",
    );
  }

  async addToCart(productName: string) {
    const cardBody = this.productCards.filter({ hasText: productName });
    const addToCartButton = cardBody.getByRole("button", {
      name: this.BTN_ADD_TO_CART,
    });
    await addToCartButton.click();
  }
}
