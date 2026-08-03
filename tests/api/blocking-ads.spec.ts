import { GOOGLE_ADS_BLOCKLIST } from "@/data/constants";
import { test, expect } from "@playwright/test";

test("block ui ads and cookies to stablize the tests", async ({
  page,
}, testinfo) => {
  if (testinfo.project.name === "blocking-ads") {
    console.log("running blocking adds tests");
  }

  for (const pattern of GOOGLE_ADS_BLOCKLIST) {
    await page.route(pattern, async (route) => {
      console.log(`aborting requst: ${route.request().url()}`);
      await route.abort("blockedbyclient");
    });
  }

  await page.goto("");

  await expect(page.locator("body")).toBeVisible();
});
