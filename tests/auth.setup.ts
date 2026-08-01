import { test as setup } from "@/fixtures/api-fixture";
import { AUTH } from "@/data/constants";
import { VALID_USER } from "@/data/users.data";
import { ENV } from "@/config/env.config";

setup("Authenticate and save state", async ({ authApi, page }) => {
  const authResponse = await authApi.login(VALID_USER);
  await page.goto(ENV.BASE_URL);

  // To Change 'token' to whatever exact key application expects in LocalStorage.
  await page.evaluate((jwtToken) => {
    localStorage.setItem("token", jwtToken);
  }, authResponse.token);

  await page.context().storageState({ path: AUTH.AUTH_STATE_PATH });
});
