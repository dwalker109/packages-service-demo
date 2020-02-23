import { RootState, CurrencyState } from "../../types";

export const selectCurrency = (state: RootState): CurrencyState =>
  state.currency;
