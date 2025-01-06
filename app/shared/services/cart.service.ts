import { Observable } from '@nativescript/core';
import { Cart, CartItem } from '../models/cart.model';
 
class CartService extends Observable {
  private _cart: Cart = { items: [], total: 0 };

  get cart(): Cart {
    return this._cart;
  }

  addToCart(product: Product, quantity: number = 1) {
    console.log('Adding to cart:', product.name, 'quantity:', quantity);
    
    const existingItem = this._cart.items.find(item => item.productId === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this._cart.items.push({
        productId: product.id,
        quantity,
        price: product.price,
        name: product.name,
        image: product.image
      });
    }
 
  }

  removeFromCart(productId: string) {
    this._cart.items = this._cart.items.filter(item => item.productId !== productId);
    this.updateTotal();
    this.notifyPropertyChange('cart', this._cart);
  }

  updateQuantity(productId: string, quantity: number) {
    const item = this._cart.items.find(item => item.productId === productId);
    if (item) {
      item.quantity = quantity;
       this.notifyPropertyChange('cart', this._cart);
    }
  }

  private updateTotal() {
    this._cart.total = this._cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  clearCart() {
    this._cart = { items: [], total: 0 };
   }
}

export const cartService = new CartService();