export interface AddToCartResponse {
  message: string;
  cartCount?: number; // Optional, in case the API also returns the new count
}
