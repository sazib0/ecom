import { Observable, Frame } from '@nativescript/core';

interface Order {
    id: string;
    orderNumber: string;
    itemCount: number;
    status: 'processing' | 'shipped' | 'delivered' | 'returned';
    date: Date;
}

export class OrdersViewModel extends Observable {
    private _orders: Order[] = [
        {
            id: '1',
            orderNumber: '456765',
            itemCount: 4,
            status: 'processing',
            date: new Date()
        },
        {
            id: '2',
            orderNumber: '454569',
            itemCount: 2,
            status: 'shipped',
            date: new Date()
        },
        {
            id: '3',
            orderNumber: '454809',
            itemCount: 1,
            status: 'delivered',
            date: new Date()
        }
    ];
    private _selectedStatus: string = 'processing';

    constructor() {
        super();
        this.set('selectedStatus', this._selectedStatus);
        this.updateFilteredOrders();
    }

    get filteredOrders(): Order[] {
        return this._orders.filter(order => order.status === this._selectedStatus);
    }

    filterByStatus(status: string) {
        this._selectedStatus = status;
        this.set('selectedStatus', status);
        this.notifyPropertyChange('filteredOrders', this.filteredOrders);
    }

    private updateFilteredOrders() {
        this.notifyPropertyChange('filteredOrders', this.filteredOrders);
    }

    onOrderTap(args: any) {
        const order = args.view.bindingContext;
        Frame.topmost().navigate({
            moduleName: 'views/orders/order-details-page',
            context: { order },
            animated: true
        });
    }

    onExploreCategories() {
        Frame.topmost().navigate({
            moduleName: 'views/home/home-page',
            clearHistory: true
        });
    }

    onNavHome() {
        Frame.topmost().navigate({
            moduleName: 'views/home/home-page',
            animated: true
        });
    }

    onNavNotifications() {
        Frame.topmost().navigate({
            moduleName: 'views/notifications/notifications-page',
            animated: true
        });
    }

    onNavOrders() {
        // Already on orders
    }

    onNavAccount() {
        Frame.topmost().navigate({
            moduleName: 'views/account/account-page',
            animated: true
        });
    }
}