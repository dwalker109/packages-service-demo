import { combineReducers } from "@reduxjs/toolkit";
import basketReducer from "./basket/basketSlice";

export default combineReducers({ basket: basketReducer });
