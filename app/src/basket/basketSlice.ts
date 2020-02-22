import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketState, Package } from "../types";

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  initialState,
  name: "basket",
  reducers: {
    addToBasket(state, action: PayloadAction<Package>): void {
      state.items.push(action.payload);
    },
    removeFromBasket(state, action: PayloadAction<number>): void {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    clearBasket(): BasketState {
      return initialState;
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
