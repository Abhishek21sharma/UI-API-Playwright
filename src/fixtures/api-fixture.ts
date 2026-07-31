import { test as base, request, APIRequestContext } from "@playwright/test";
import { ENV } from "@/config/env.config";
import { AuthApi } from "@/api/auth.api";

type ApiFixtures = {
  apiContext: APIRequestContext;
  authApi: AuthApi;
};

export const test = base.extend<ApiFixtures>({
  apiContext: async ({}, use) => {
    const context = await request.newContext({
      baseURL: ENV.API_BASE_URL,
      extraHTTPHeaders: { Accept: "application/json" },
    });
    await use(context);
    await context.dispose(); //Teardown after test
  },
  // Inject the api client into code
  authApi: async ({ apiContext }, use) => {
    await use(new AuthApi(apiContext));
  },
});
