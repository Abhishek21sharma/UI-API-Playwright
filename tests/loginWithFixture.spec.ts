import { test, expect } from "../fixtures/app-fixture";
import { VALID_USER, INVALID_USER } from "../data/users";

test("login test", async ({ app }) => {
  await app.login.navigateTo();
  await app.login.loginAs(VALID_USER);
});
