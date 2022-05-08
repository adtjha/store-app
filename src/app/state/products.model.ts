export interface Product {
  id?: number;
  imgUrl: string;
  name: string;
  price: string;
  description: string;
}

export type Products = Array<Product>;
