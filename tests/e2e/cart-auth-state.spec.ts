import { test, expect } from "@playwright/test";

test(
  "user can access cart page directly",
  { tag: ["@auth"] },
  async ({ page }) => {
    await page.goto("/client/#/dashboard/cart");
    await expect(page.locator('button:has-text("Checkout")')).toBeVisible();
  },
);
