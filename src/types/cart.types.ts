export interface CartItemData {
  id?: string;
  name: string;
  price: string;
  availability?: string;
}

export interface CartSummaryData {
  subtotal: string;
  total: string;
}
