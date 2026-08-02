import { test as base, request, APIRequestContext } from "@playwright/test";
import { CartApi } from "@/api/cart.api";
import { ENV } from "@/config/env.config";
import { AUTH } from "@/data/constants";
import fs from "fs/promises";

type ApiFixtures = {
  authenticatedRequest: APIRequestContext;
  cartAPI: CartApi;
};

export const test = base.extend<ApiFixtures>({
  authenticatedRequest: async ({ playwright }, use) => {
    let token = "";
    try {
      const stateData = await fs.readFile(AUTH.AUTH_STATE_PATH, "utf-8");
      const state = JSON.parse(stateData);
      const tokenItem = state.origins[0]?.localStorage?.find(
        (item: any) => item.name === "token",
      );
      if (tokenItem) token = tokenItem.value;
    } catch (error) {
      console.log("No auth state found.");
      throw new Error(
        `File doesn't exists , user is not authenticated: ${AUTH.AUTH_STATE_PATH}`,
      );
    }

    const context = await playwright.request.newContext({
      baseURL: ENV.API_BASE_URL,
      extraHTTPHeaders: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    await use(context);
    await context.dispose();
  },
  cartAPI: async ({ authenticatedRequest }, use) => {
    await use(new CartApi(authenticatedRequest));
  },
});

export { expect } from "@playwright/test";
