import { CATALOG } from "../data/products";
import { VALID_USER } from "../data/users";
import { test } from "../fixtures/app-fixture";

test("should add Zara Coat 3 to the cart", { tag: [] }, async ({ app }) => {
  app.login.loginAs(VALID_USER);
  app.dashboard.addToCart(CATALOG.ZARA_COAT_3.name);
});
