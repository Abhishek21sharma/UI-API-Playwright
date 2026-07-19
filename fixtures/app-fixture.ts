import { test as base } from "@playwright/test";
import { App } from "../pages/app";

//define the type here
export type customeFixtures = {
  app: App;
};

//extend the base to include our App facade
export const test = base.extend<customeFixtures>({
  app: async ({ page }, use) => {
    //init the app facade once per tests
    const app = new App(page);
    await use(app);
  },
});

export { expect } from "@playwright/test";
