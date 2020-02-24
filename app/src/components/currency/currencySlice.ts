import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, CurrencyState } from "../../types";
import { publicApi } from "../../config";

const initialState: CurrencyState = {
  available: ["USD"],
  active: "USD",
};

const currencySlice = createSlice({
  initialState,
  name: "currency",
  reducers: {
    setActive(state, action: PayloadAction<string>): void {
      state.active = action.payload;
    },
    currencyFetchCompleted(state, action: PayloadAction<string[]>): void {
      state.available = action.payload;
    },
    currencyFetchFailed(): CurrencyState {
      return initialState;
    },
  },
});

export const {
  setActive,
  currencyFetchCompleted,
  currencyFetchFailed,
} = currencySlice.actions;

export default currencySlice.reducer;

export const thunkFetchCurrencies = (): AppThunk => async dispatch => {
  try {
    const response = await fetch(`${publicApi.url}/currencies`);
    const currencies = await response.json();
    dispatch(currencyFetchCompleted(currencies));
  } catch (e) {
    dispatch(currencyFetchFailed());
  }
};
