import { Page } from "@playwright/test";
import { MOCK_ARTICLE_RESPONSE } from "@/data/mocks/article.mock";

export class MockManager {
  constructor(private readonly page: Page) {}

  async mockArticleResponse(customTitle?: string): Promise<void> {
    //note: ** matches // whereas * matches /
    await this.page.route("**/api/articles/*", async (route) => {
      //or we can directly use it as import the json file
      const responseBody = { ...MOCK_ARTICLE_RESPONSE };

      //useage of route.fetch() method
      const response = await route.fetch();
      const resBody = await response.json();
      resBody.articles[0].title = "This is a test title";
      //now we can pass the resBody as well to fulfill with JSON.stringify(resBody)

      if (customTitle) {
        responseBody.article.title = customTitle;
      }

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(responseBody),
      });
    });
  }

  async mockServerError(
    endpointGlob: string,
    status: number = 500,
  ): Promise<void> {
    await this.page.route(endpointGlob, async (route) => {
      await route.fulfill({
        status: status,
        contentType: "application/json",
        // Provide a standard error payload the front-end might expect
        body: JSON.stringify({
          errors: {
            body: [`Server experienced an unexpected ${status} error`],
          },
        }),
      });
    });
  }

  async clearMocks(): Promise<void> {
    await this.page.unrouteAll({ behavior: "ignoreErrors" });
  }
}
