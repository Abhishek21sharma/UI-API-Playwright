import { ScenarioState } from "@/types/context.types";
import { test as base } from "playwright-bdd";

type TestOptions = {
  scenarioState: ScenarioState;
};

export const test = base.extend<TestOptions>({
  //empty state, so it can be passed across different steps
  scenarioState: async ({}, use) => {
    await use({});
  },
});
