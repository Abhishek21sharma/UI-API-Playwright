import { test, expect } from "@/fixtures/app-fixture";
import { VALID_USER } from "@/data/users.data";

test("sign-out tests", { tag: ["@sign_out"] }, async ({ app, page }) => {
  await app.login.navigateTo();
  await app.login.loginAs(VALID_USER);
  await expect(page).toHaveURL(/.*dashboard/);

  //hard-code wait just for testing(not recommended)
  await page.waitForTimeout(5000);
  await app.signOut.signOut();

  await expect(page).toHaveURL(/.*login/);
  await expect(app.login.emailBox).toBeVisible();
  await expect(app.login.passwordBox).toBeVisible();
});
