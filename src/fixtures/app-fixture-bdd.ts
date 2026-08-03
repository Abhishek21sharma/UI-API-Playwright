import { test as base } from "playwright-bdd";
import { App } from "@/pages/app.manager";
import { MockManager } from "@/utils/mock.manager";

//define the type here
export type customeFixtures = {
  app: App;
  mockManager: MockManager;
};

//extend the base to include our App facade
export const test = base.extend<customeFixtures>({
  app: async ({ page }, use) => {
    //init the app facade once per tests
    const app = new App(page);
    await use(app);
  },
  mockManager: async ({ page }, use) => {
    const mockManager = new MockManager(page);
    await use(mockManager);
    //auto cleanup post test
    await mockManager.clearMocks();
  },
});

export { expect } from "@playwright/test";
