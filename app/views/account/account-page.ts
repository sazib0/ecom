import { NavigatedData, Page } from '@nativescript/core';
import { AccountViewModel } from './account-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  if (!page.bindingContext) {
    page.bindingContext = new AccountViewModel();
  }
}