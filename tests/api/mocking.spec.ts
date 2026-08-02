import { test, expect } from "@/fixtures/app-fixture";
import { mock } from "node:test";

test(
  "Test mocked backend response",
  { tag: ["@mock"] },
  async ({ page, mockManager }) => {
    await mockManager.mockArticleResponse("MOCKED: Playwright Automation");

    await page.goto("https://conduit.bondaracademy.com/");

    //to prevent race condition - click and wait for the response and then move to next step
    await Promise.all([
      page.waitForURL("**/article/**"),
      page.locator(".preview-link").first().click(),
    ]);
    const articleTitle = page.locator("h1").first();

    await expect(articleTitle).toHaveText("MOCKED: Playwright Automation");
  },
);

test("-ve tests", async ({ page, mockManager }) => {
  await mockManager.mockServerError("**/api/articles/*", 500);
  await page.goto("https://conduit.bondaracademy.com/");
  await page.locator(".preview-link").first().click();
  const errorContainer = page.locator(".error-messages");
  await expect(errorContainer).toBeVisible();
  await expect(errorContainer).toContainText("unexpected 500 error");
});
