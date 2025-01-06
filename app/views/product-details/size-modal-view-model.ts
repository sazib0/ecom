import { Observable } from '@nativescript/core';

export class SizeModalViewModel extends Observable {
    private _sizes = [
        { size: '22', name: 'XXS' },
        { size: '24', name: 'XS' },
        { size: '26', name: 'S' },
        { size: '28', name: 'M' },
        { size: '30', name: 'L' },
        { size: '32', name: 'XL' },
        { size: '34', name: 'XXL' }
    ];

    constructor() {
        super();
        this.set('sizes', this._sizes);
    }

    onSelect() {
        this.closeModal(true);
    }

    onClose() {
        this.closeModal(false);
    }

    private closeModal(selected: boolean) {
        const page = this.get('page');
        page.closeModal(selected);
    }
}