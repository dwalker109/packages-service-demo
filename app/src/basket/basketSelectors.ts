import { RootState, BasketState } from "../types";
import { createSelector } from "@reduxjs/toolkit";

export const selectBasket = (state: RootState): BasketState => state.basket;

export const selectBasketItems = createSelector(
  selectBasket,
  basket => basket.items
);
