/**
 * @author: Abhishek S
 * @description: This config file is implemented based on 'fail-first' mechanism
 * if mandatory env vars are missing & also strict type casting for env vars
 * @example: as an example, have also used zod here for strict schema validation
 * code is working and tested. just commented as don't need 2 approches here.
 */

import * as dotenv from "dotenv";
import * as path from "path";

const envName = process.env.Test_ENV || "qa";
const envPath = path.resolve(__dirname, `.env.${envName}`);
console.log(`env file is: ${envPath}`);

//load ENV file to node 'process'
dotenv.config({ path: envPath });

//defining the mandatory env variables as an array..
const mandatoryENVVars = ["BASE_URL", "VALID_EMAIL", "VALID_PWD"] as const;

//fail if the mandatory variables does not exists
for (const envVar of mandatoryENVVars) {
  if (!process.env[envVar]) {
    throw new Error(
      `\nERROR: Missing required environment variable: '${envVar}' in '.env.${envName}'\n`,
    );
  }
}

//defining the type of the object
export const ENV = {
  BASE_URL: process.env.BASE_URL as string,
  VALID_EMAIL: process.env.VALID_EMAIL as string,
  VALID_PWD: process.env.VALID_PWD as string,
};
