import { BaseAPIClient } from "./base.api";
import { API_ENDPOINTS } from "@/data/endpoints";
import {
  AddToCartPayload,
  AddToCartRespose,
  AddtoCartResponseScehama,
} from "@/schemas/cart.schema";

export class CartApi extends BaseAPIClient {
  //add product
  async addProductToCart(payload: AddToCartPayload): Promise<AddToCartRespose> {
    return this.post(
      API_ENDPOINTS.ADD_TO_CART,
      payload,
      AddtoCartResponseScehama,
      200,
    );
  }
}
