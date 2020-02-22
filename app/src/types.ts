import rootReducer from "./setupRedux";

export type RootState = ReturnType<typeof rootReducer>;

export type BasketState = {
  items: Package[];
};

export type AddToBasketPayload = {
  item: Package;
  quantity: number;
};

export type BasketLine = {
  pkg: Package;
  quantity: number;
};

export type BasketSummary = {
  basketLines: BasketLine[];
  subtotal: number;
  discount: number;
  grandTotal: number;
};

export type Package = {
  id: string;
  name: string;
  description: string;
  products: Product[];
  price: number;
};

export type Product = {
  id: string;
  name: string;
  usdPrice: number;
};
