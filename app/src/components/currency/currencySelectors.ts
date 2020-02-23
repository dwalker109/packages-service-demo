import { RootState, CurrencyState } from "../../types";
import { createSelector } from "@reduxjs/toolkit";

export const selectCurrency = (state: RootState): CurrencyState =>
  state.currency;

export const selectCurrencyFormatter = createSelector(
  selectCurrency,
  state =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: state.active,
      minimumFractionDigits: 2,
    })
);
