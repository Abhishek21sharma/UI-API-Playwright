import { test, expect } from "@playwright/test";
import { LoginPage } from "@/pages/login.page";
import { VALID_USER, INVALID_USER } from "@/data/users";

test.describe("Login flow testing", () => {
  let loginPage: LoginPage;

  test.beforeEach("nav to", async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo();
  });

  test(
    "success login @smoke",
    { tag: ["@smoke", "@regression"] },
    async ({ page }) => {
      await loginPage.loginAs(VALID_USER);
      await expect(page).toHaveURL(/.*dashboard/);
    },
  );

  test("fail login @reg", async ({ page }) => {
    await loginPage.loginAs(INVALID_USER);
    const errorMsg = page.locator('[data-test="error"]');
    await expect(errorMsg).toBeVisible();
  });
});
