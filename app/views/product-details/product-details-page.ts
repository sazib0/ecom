import { NavigatedData, Page } from '@nativescript/core';
import { ProductDetailsViewModel } from './product-details-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  const context = args.context;
  page.bindingContext = new ProductDetailsViewModel(context.product);
}