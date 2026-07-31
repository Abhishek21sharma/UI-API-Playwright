import { test } from "@/fixtures/api-fixture";
import { VALID_USER } from "@/data/users.data";

test("Login via API", { tag: ["@api"] }, async ({ authApi }) => {
  const response = await authApi.login(VALID_USER);
  console.log(response.message);
});
