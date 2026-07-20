import { test, expect } from "../fixtures/app-fixture";
import { VALID_USER, INVALID_USER } from "../data/users";

test("login test", { tag: ["@smoke"] }, async ({ app }, testinfo) => {
  await app.login.navigateTo();
  await app.login.loginAs(VALID_USER);
});
