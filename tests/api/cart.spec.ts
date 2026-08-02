import { test, expect } from "@/fixtures/api-request-fixture";
import cartPayload from "@/data/payloads/add-to-cart.json";

test("cart api test ", { tag: ["@api"] }, async ({ cartAPI }) => {
  const res = await cartAPI.addProductToCart(cartPayload);

  expect(res.message).toBe("Product Added To Cart");
});
