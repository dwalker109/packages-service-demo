import rootReducer from "./setupRedux";

export type RootState = ReturnType<typeof rootReducer>;

export type BasketState = {
  items: Package[];
};

export type AddToBasketPayload = {
  item: Package;
  quantity: number;
};

export interface Package {
  id: string;
  name: string;
  description: string;
  products: Product[];
  price: number;
}

export interface Product {
  id: string;
  name: string;
  usdPrice: number;
}
