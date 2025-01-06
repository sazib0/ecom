import { Observable, Frame, View } from '@nativescript/core';
import { cartService } from '../../shared/services/cart.service';

export class ProductDetailsViewModel extends Observable {
    private _product = {
        name: 'Caffe Mocha',
        variant: 'Ice/Hot',
        rating: 4.8,
        reviews: 230,
        price: 4.53,
        description: 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo..',
        image: 'res://coffee_image'
    };
 
    constructor() {
        super();
        this.set('product', this._product);
        this.set('quantity', this._quantity);
    }

    showSizeModal() {
        const page = Frame.topmost().currentPage;
        page.showModal('views/product-details/size-modal', {
            context: {},
            fullscreen: true,
            animated: true
        });
    }

    onAddToCart() {
        cartService.addToCart(this._product, this._quantity);
    }

    onBuyNow() {
        this.onAddToCart();
        Frame.topmost().navigate({
            moduleName: 'views/checkout/checkout-page',
            animated: true
        });
    }

    goBack() {
        Frame.topmost().goBack();
    }

    onCartTap() {
        Frame.topmost().navigate({
            moduleName: 'views/cart/cart-page',
            animated: true
        });
    }

    onReadMore() {
        // Implement read more functionality
    }
}