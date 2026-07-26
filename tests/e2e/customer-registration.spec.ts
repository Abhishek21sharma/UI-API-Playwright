import { test, expect } from "@playwright/test";
import { createCustomer } from "@/data/factory/customer-factory";

test.describe("Customer Registration", () => {
  test("should register a standard random user successfully", async ({
    page,
  }) => {
    const validCustomer = createCustomer();

    await page.goto("/register");
    await page.fill("#firstName", validCustomer.firstName);
    await page.fill("#email", validCustomer.email);
    // ... fill rest of form

    await page.click('button[type="submit"]');
    await expect(page.locator(".success-message")).toBeVisible();
  });

  test("should reject registration with an invalid email format", async ({
    page,
  }) => {
    // 2. Generate a random customer, but OVERRIDE the email to be invalid
    const invalidCustomer = createCustomer({
      email: "invalid-email-format.com",
      isPremium: false,
    });

    await page.goto("/register");
    await page.fill("#firstName", invalidCustomer.firstName);
    await page.fill("#email", invalidCustomer.email); // Uses the bad email
    await page.click('button[type="submit"]');
    await expect(page.locator(".error-email")).toHaveText(
      "Please enter a valid email.",
    );
  });
});
