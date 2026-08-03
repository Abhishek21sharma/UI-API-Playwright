import { createBdd } from "playwright-bdd";
import { test } from "@/fixtures/scenatio-state-bdd-fixture";

export const { Given, When, Then } = createBdd(test);
