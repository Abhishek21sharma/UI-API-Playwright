import { test, expect } from "../fixtures/app-fixture";
import { VALID_USER, INVALID_USER } from "../data/users";

test("login test", { tag: ["@fixture"] }, async ({ app, page }, testinfo) => {
  await app.login.navigateTo();
  await app.login.loginAs(VALID_USER);
  await expect(page).toHaveURL(/.*dashboard/);
});
