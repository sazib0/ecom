import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';
import { cartService } from '../../shared/services/cart.service';

interface DeliveryAddress {
  street: string;
  city: string;
  postalCode: string;
}

export class CheckoutViewModel extends Observable {
  private _address: DeliveryAddress = {
    street: '',
    city: '',
    postalCode: ''
  };
  private _paymentMethod: 'cash' | 'card' = 'cash';

  constructor() {
    super();
    this.set('cart', cartService.cart);
    this.set('address', this._address);
    this.set('paymentMethod', this._paymentMethod);
  }

  selectCashOnDelivery() {
    this._paymentMethod = 'cash';
    this.notifyPropertyChange('paymentMethod', this._paymentMethod);
  }

  selectCard() {
    this._paymentMethod = 'card';
    this.notifyPropertyChange('paymentMethod', this._paymentMethod);
  }

  placeOrder() {
    // Here you would typically send the order to your backend
    cartService.clearCart();
    Frame.topmost().navigate({
      moduleName: 'views/orders/orders-page',
      clearHistory: true
    });
  }

  goBack() {
    Frame.topmost().goBack();
  }
}