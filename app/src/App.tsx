import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import rootReducer from "./setupRedux";
import PackageList from "./shop/PackageList";

const store = configureStore({ reducer: rootReducer });

const App = () => (
  // Structure

  // Product List / Product Detail routes
  <PackageList />
  // Basket
  // Currency Switcher
);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxApp;
