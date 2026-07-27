//this is a factory engine..
//it's a good example of how we want to create data per needs and not hard code anything

import { faker } from "@faker-js/faker";
import { Customer } from "../../types/customer.types";

/**
 * Generates a collision-free Customer object.
 * @param overrides - Optional specific values to overwrite the random defaults.
 * @returns Customer object
 */

export function createCustomer(overrides?: Partial<Customer>): Customer {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `auto_${Date.now()}_${faker.internet.email()}`,
    phone: faker.phone.number(),
    isPremium: faker.datatype.boolean(),
    ...overrides,
  };
}
