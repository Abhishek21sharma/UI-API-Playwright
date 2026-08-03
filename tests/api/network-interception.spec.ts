import { test, expect } from "@playwright/test";
import { promise } from "zod";

/**
 * @description This test is just to discuss passive network interception
 * when we do not modiy the requst or response and just observe it
 * note: for modiying the data over network: use page.route()
 */
test("network intercept when to use, how to use", async ({ page }) => {
  //page.waitforResponse()
  //1. this is used to prevent race condition. to see our click , has actually made call to the endpoint
  //and that endpoint actually returned the expected output or not
  //2. to pickup something from the responsebody

  //usage:
  const [deleteRes] = await Promise.all([
    page.waitForResponse(
      (res) =>
        res.url().includes("/api/article") &&
        res.request().method() === "DELETE" &&
        res.status() === 204,
    ),
    page.locator(".delete-button").click(),
  ]);

  const deleteResponseBody = await deleteRes.json();
  const slugId = deleteResponseBody.article.slug;
});

test("another example", async ({ page }) => {
  await page.goto("");

  const [request] = await Promise.all([
    page.waitForRequest(
      (req) => req.url().includes("/api/articles") && req.method() === "POST",
    ),
    //dirty code example below - intertially added for reference that DON'T use like this
    page.getByRole("button").first().click(),
  ]);

  const payloadFormed = await request.postDataJSON();
  expect(payloadFormed.article.title).toBe("");
});
