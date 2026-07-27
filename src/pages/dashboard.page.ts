import { Locator, Page, expect } from "@playwright/test";
import { API_ENDPOINTS } from "@/data/endpoints";
import { AddToCartResponse } from "@/types/cart-api.types";

export class DashboardPage {
  readonly page: Page;
  readonly productCards: Locator;
  readonly cartButton: Locator;
  readonly cartBadge: Locator;
  private readonly BTN_ADD_TO_CART = "Add To Cart";

  constructor(page: Page) {
    this.page = page;
    this.productCards = this.page.locator(
      "#products .container .row .card-body",
    );
    //i -> reg exp for case sensitivity & reg exp
    //\b stands for a word boundary, which ensures it won't match "Add to Cart" (since "Add" comes before it), but will match "Cart" even if numbers or spaces exist after it.
    this.cartButton = this.page.getByRole("button", { name: /\bCart\b/i });
    //this.cartButton = this.page.getByRole("button", { name: /^Cart$/i });
    //this.page.getByRole("button", { name: "Cart", exact: true });
    this.cartBadge = this.cartButton.locator("label");
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

  getCartBadge() {
    return this.cartBadge;
  }
}
