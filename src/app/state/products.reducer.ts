import { initialState } from './initialState';
import { AddProduct, RemoveProduct, ADD_PRODUCT, REMOVE_PRODUCT } from './products.action';
import { Products } from './products.model';

export type Action = AddProduct | RemoveProduct;

export function productsReducer(state: Products = initialState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, { id: ~~(Math.random() * 1000), ...action.payload }];
    case REMOVE_PRODUCT:
      console.log(
        state.filter((e) => e.id !== action.payload),
        action
      );
      return [...state.filter((e) => e.id !== action.payload)];
    default:
      return [...state];
  }
}
