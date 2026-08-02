import { z } from "zod";

export const AddtoCartPayloadScehama = z.object({
  _id: z.string().min(1, "Product ID cannot be empty"),
  product: z.object({
    _id: z.string(),
    productName: z.string(),
    productCategory: z.string(),
    productSubCategory: z.string(),
    productPrice: z.number(),
    productDescription: z.string(),
    productImage: z.string(),
    productRating: z.string(),
    productTotalOrders: z.string(),
    productStatus: z.boolean(),
    productFor: z.string(),
    productAddedBy: z.string(),
    __v: z.number(),
  }),
});

//defining response schema
export const AddtoCartResponseScehama = z.object({
  message: z.string(),
});

//Infer TS types from zod
export type AddToCartPayload = z.infer<typeof AddtoCartPayloadScehama>;
export type AddToCartRespose = z.infer<typeof AddtoCartResponseScehama>;
