import { Product } from "../types/product";

export const CATALOG = {
  ZARA_COAT_3: {
    name: "ZARA COAT 3",
    price: 11500, // Useful for asserting the cart total later!
  } as Product,
  ADIDAS_ORIGINAL: {
    name: "ADIDAS ORIGINAL",
    price: 31500,
  } as Product,
} as const;
