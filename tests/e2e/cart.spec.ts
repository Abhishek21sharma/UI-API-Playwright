import { CATALOG } from "@/data/products";
import { VALID_USER } from "@/data/users";
import { test, expect } from "@/fixtures/app-fixture";
import { SUCCESS_MSGS } from "@/data/constants";

test(
  "should add Zara Coat 3 to the cart",
  { tag: ["@fixture"] },
  async ({ app, page }) => {
    await app.login.navigateTo();
    await app.login.loginAs(VALID_USER);
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(app.dashboard.cartBadge).toHaveText("");

    const resMsg = await app.dashboard.addToCart(CATALOG.ZARA_COAT_3.name);
    expect(resMsg.message).toBe(SUCCESS_MSGS.CART_ADDED);
    await expect(app.dashboard.getCartBadge()).toHaveText("1");
  },
);
