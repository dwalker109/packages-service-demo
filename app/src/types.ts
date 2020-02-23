import rootReducer from "./setupRedux";
import { ThunkAction, Action } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof rootReducer>;

export type ValidSorts = "name asc" | "name desc" | "price asc" | "price desc";

export type SortDef = {
  id: ValidSorts;
  text: string;
  term: "name" | "price";
  direction: "asc" | "desc";
};

export type SortingOptions = Map<ValidSorts, SortDef>;

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

export type CurrencyState = {
  available: string[];
  active: string;
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

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
