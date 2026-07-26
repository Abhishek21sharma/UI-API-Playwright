import { Locator, Page, expect } from "@playwright/test";
import { API_ENDPOINTS } from "@/data/endpoints";
import { AddToCartResponse } from "@/types/cart-api";

export class DashboardPage {
  readonly page: Page;
  readonly productCards: Locator;
  private readonly BTN_ADD_TO_CART = "Add To Cart";

  constructor(page: Page) {
    this.page = page;
    this.productCards = this.page.locator(
      "#products .container .row .card-body",
    );
  }

  async addToCart(productName: string): Promise<AddToCartResponse> {
    const cardBody = this.productCards.filter({ hasText: productName });
    const addToCartButton = cardBody.getByRole("button", {
      name: this.BTN_ADD_TO_CART,
    });

    const [response] = await Promise.all([
      this.page.waitForResponse(
        (res) =>
          res.url().includes(API_ENDPOINTS.ADD_TO_CART) &&
          res.request().method() === "POST",
      ),
      addToCartButton.click(),
    ]);
    return await response.json();
  }
}
