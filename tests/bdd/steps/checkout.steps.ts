import { Given, When, Then } from "./fixture";
import { VALID_USER } from "@/data/users.data";

Given("login user", async ({ page, app }) => {
  await app.login.navigateTo();
  await app.login.loginAs(VALID_USER);
});

Given("User logged in to application", async ({}) => {
  console.log("inside GIVEN block");
});

When("I click on {string} to the cart", async ({}, arg: string) => {
  console.log("inside WHEN block");
});

Then("the cart details should be updated", async ({}) => {
  console.log("inside THEN block");
});
