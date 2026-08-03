import { createBdd } from "playwright-bdd";
import { test } from "@/fixtures/app-fixture-bdd";

export const { Given, When, Then } = createBdd(test);
