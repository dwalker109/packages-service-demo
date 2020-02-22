import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddToBasketPayload, BasketState } from "../types";

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  initialState,
  name: "basket",
  reducers: {
    addToBasket(state, action: PayloadAction<AddToBasketPayload>): void {
      for (let q = 0; q < action.payload.quantity; q++) {
        state.items.push(action.payload.item);
      }
    },
    clearBasket(): BasketState {
      return initialState;
    },
  },
});

export const { addToBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
