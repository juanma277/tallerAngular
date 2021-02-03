export interface ProductModel {
  process: boolean;
  products: Product[];
}

export interface Product {
  enable?: boolean;
  _id?: string;
  productName?: string;
  quantity?: number;
  description?: string;
  username?: string;
  __v?: number;
}
