import { combineReducers } from "@reduxjs/toolkit";
import basketReducer from "./components/basket/basketSlice";
import currencyReducer from "./components/currency/currencySlice";

export default combineReducers({
  basket: basketReducer,
  currency: currencyReducer,
});
