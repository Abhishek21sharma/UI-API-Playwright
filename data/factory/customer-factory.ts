//this is a factory engine..
//it's a good example of how we want to create data per needs and not hard code anything

import { faker } from "@faker-js/faker";
import { Customer } from "../../types/customer";

/**
 * Generates a collision-free Customer object.
 * @param overrides - Optional specific values to overwrite the random defaults.
 * @returns Customer object
 */

//note: to be clear: here overrides is just a variable (and it's optional with ?)  name of type as Partial of Customer

export function createCustomer(overrides?: Partial<Customer>): Customer {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    // Appending a timestamp ensures absolute uniqueness even if Faker repeats
    email: `auto_${Date.now()}_${faker.internet.email()}`,
    phone: faker.phone.number(),
    isPremium: faker.datatype.boolean(),
    ...overrides, // The spread operator applies any custom values last
  };
}
