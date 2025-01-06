import { Observable, Frame } from '@nativescript/core';
import { products, Product } from '../../shared/data/products';
import { cartService } from '../../shared/services/cart.service';

export class HomeViewModel extends Observable {
    private _products: Product[] = products;
    private _searchQuery: string = '';
    private _selectedCategory: string = 'Hoodies';
    private _cartCount: number = 0;
    private _userProfile: string = 'res://profile_placeholder';

    constructor() {
        super();
        this.set('products', this._products);
        this.set('selectedCategory', this._selectedCategory);
        this.set('cartCount', this._cartCount);
        this.set('userProfile', this._userProfile);
        
        // Subscribe to cart changes
        cartService.on(Observable.propertyChangeEvent, () => {
            this._cartCount = cartService.cart.items.length;
            this.notifyPropertyChange('cartCount', this._cartCount);
        });
    }

    get filteredProducts(): Product[] {
        return this._products.filter(product => 
            product.category === this._selectedCategory &&
         );
    }

    showDealsModal() {
        const page = Frame.topmost().currentPage;
        page.showModal('views/modals/deals-modal', {
            fullscreen: true,
            animated: true
        });
    }

    showSortModal() {
        const page = Frame.topmost().currentPage;
        page.showModal('views/modals/sort-modal', {
            fullscreen: true,
            animated: true
        });
    }

    showCategoriesModal() {
        const page = Frame.topmost().currentPage;
        page.showModal('views/modals/categories-modal', {
            fullscreen: true,
            animated: true
        });
    }

 
    onAddToCart(args: any) {
        const product = args.view.bindingContext;
        cartService.addToCart(product, 1);
    }

    onWishlistTap(args: any) {
        // Implement wishlist functionality
        console.log('Add to wishlist:', args.view.bindingContext);
    }

    onCartTap() {
        Frame.topmost().navigate({
            moduleName: 'views/cart/cart-page',
            animated: true
        });
    }

    onNavHome() {
        // Already on home
    }

    onNavNotifications() {
        Frame.topmost().navigate({
            moduleName: 'views/notifications/notifications-page',
            animated: true
        });
    }

    onNavOrders() {
        Frame.topmost().navigate({
            moduleName: 'views/orders/orders-page',
            animated: true
        });
    }

    onNavAccount() {
        Frame.topmost().navigate({
            moduleName: 'views/account/account-page',
            animated: true
        });
    }
}