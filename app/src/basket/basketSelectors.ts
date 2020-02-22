import { createSelector } from "@reduxjs/toolkit";
import { BasketState, BasketSummary, RootState } from "../types";
import {
  calcBasketLines,
  calcDiscount,
  calcGrandTotal,
  calcSubtotal,
} from "./basketUtils";

export const selectBasket = (state: RootState): BasketState => state.basket;

export const selectBasketItems = createSelector(
  selectBasket,
  basket => basket.items
);

export const selectBasketSummarised = createSelector(
  selectBasketItems,
  items => {
    const basketLines = calcBasketLines(items);
    const subtotal = calcSubtotal(basketLines);
    const discount = calcDiscount(items, subtotal);
    const grandTotal = calcGrandTotal(subtotal, discount);

    const basketSummary: BasketSummary = {
      basketLines,
      subtotal,
      discount,
      grandTotal,
    };

    return basketSummary;
  }
);
