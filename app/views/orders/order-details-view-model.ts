import { Observable, Frame } from '@nativescript/core';

export class OrderDetailsViewModel extends Observable {
    private _order: any;

    constructor(order: any) {
        super();
        this._order = order;
        this.set('order', order);
    }

    goBack() {
        Frame.topmost().goBack();
    }

    viewAllItems() {
        // Implement view all items functionality
        console.log('View all items for order:', this._order.orderNumber);
    }
}