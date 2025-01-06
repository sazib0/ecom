import { Observable } from '@nativescript/core';
import { cartService } from '../../shared/services/cart.service';
import { Frame } from '@nativescript/core';

export class CartViewModel extends Observable {
  constructor() {
    super();
    this.updateCart();
    cartService.on(Observable.propertyChangeEvent, () => {
      this.updateCart();
    });
  }

  private updateCart() {
    this.set('cart', cartService.cart);
  }
 

  decreaseQuantity(args: any) {
    const item = args.view.bindingContext;
    if (item.quantity > 1) {
      cartService.updateQuantity(item.productId, item.quantity - 1);
    } else {
      cartService.removeFromCart(item.productId);
    }
  }

  clearCart() {
    cartService.clearCart();
  }

  goBack() {
    Frame.topmost().goBack();
  }

  goToCheckout() {
    Frame.topmost().navigate({
      moduleName: 'views/checkout/checkout-page',
      animated: true
    });
  }
}