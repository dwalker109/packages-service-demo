import { combineReducers } from "@reduxjs/toolkit";
import basketReducer from "./basket/basketSlice";
import currencyReducer from "./currency/currencySlice";

export default combineReducers({
  basket: basketReducer,
  currency: currencyReducer,
});
