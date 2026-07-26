export const ERROR_MSGS = {
  INVALID_LOGIN: "The username or password you entered is incorrect.",
  SESSION_EXPIRED: "Your session has expired. Please log in again.",
  REQUIRED_FIELD: "This field is mandatory.",
} as const;

// 'as const' makes this deeply readonly in TypeScript, preventing accidental mutation in tests.

export const SUCCESS_MSGS = {
  CART_ADDED: "Product Added To Cart",
} as const;
