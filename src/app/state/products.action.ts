import { Action } from '@ngrx/store';
import { Product } from './products.model';

export const ADD_PRODUCT = '[Product] Add';
export const REMOVE_PRODUCT = '[Product] Remove';

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: Product) {}
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;

  constructor(public payload: number) {}
}
