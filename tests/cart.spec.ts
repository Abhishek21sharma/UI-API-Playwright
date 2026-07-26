import { CATALOG } from "../data/products";
import { VALID_USER } from "../data/users";
import { test, expect } from "../fixtures/app-fixture";

test(
  "should add Zara Coat 3 to the cart",
  { tag: ["@fixture"] },
  async ({ app, page }) => {
    await app.login.navigateTo();
    await app.login.loginAs(VALID_USER);
    await expect(page).toHaveURL(/.*dashboard/);
    const resMsg = await app.dashboard.addToCart(CATALOG.ZARA_COAT_3.name);
    //for tomorrow -> to update following message in the constant file directory
    expect(resMsg.message).toBe("Product Added To Cart");
  },
);
