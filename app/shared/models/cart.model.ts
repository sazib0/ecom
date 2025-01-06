export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}