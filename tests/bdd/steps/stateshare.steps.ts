import { Given, When, Then } from "./fixture2";

Given("When I get the cart count", async ({ page, scenarioState }) => {
  await page.goto("");
  //get the count of items in the cart from the UI and let's say it's '5'
  scenarioState.cartTotal = 5;
});

Then("I verify the cart item count", async ({ page, scenarioState }) => {
  const actualCartItemsCount = scenarioState.cartTotal;
  const expectedCartItemsCount = 5;
});
