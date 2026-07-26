import { expect, test } from "@/fixtures/app-fixture";
import { VALID_USER } from "@/data/users";
import { CATALOG } from "@/data/products";
import { SUCCESS_MSGS } from "@/data/constants";

const dollar = "$";

test("my cart page tests", { tag: ["@cart"] }, async ({ app, page }) => {
  await app.login.navigateTo();
  await app.login.loginAs(VALID_USER);
  await expect(page).toHaveURL(/.*dashboard/);

  const resMsg = await app.dashboard.addToCart(CATALOG.ZARA_COAT_3.name);
  expect(resMsg.message).toBe(SUCCESS_MSGS.CART_ADDED);
  await expect(app.dashboard.getCartBadge()).toHaveText("1");

  await app.myCart.navToCart();
  await expect(page).toHaveURL(/.*cart/);

  //cart page validations starts here..
  await expect(app.myCart.pageHeading).toBeVisible();

  const productName = app.myCart.getCartRowByName(CATALOG.ZARA_COAT_3.name);
  await expect(productName).toBeVisible();

  const productPrice = app.myCart.getCartRowByName(
    `MRP ${dollar} ${CATALOG.ZARA_COAT_3.price}`,
  );
  await expect(productPrice).toBeVisible();

  const productAvailablity = app.myCart.getCartRowByName(
    "" + CATALOG.ZARA_COAT_3.availability,
  );
  await expect(productAvailablity).toBeVisible();

  //verify subtotal & total
  await expect(app.myCart.subTotal).toHaveText(
    dollar + CATALOG.ZARA_COAT_3.price,
    {
      useInnerText: true,
    },
  );

  await expect(app.myCart.total).toHaveText(
    dollar + CATALOG.ZARA_COAT_3.price,
    {
      useInnerText: true,
    },
  );
});
