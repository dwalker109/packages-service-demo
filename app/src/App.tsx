import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import rootReducer from "./setupRedux";
import PackageList from "./shop/PackageList";
import { Router } from "@reach/router";
import PackageDetail from "./shop/PackageDetail";

const store = configureStore({ reducer: rootReducer });

const App = () => (
  <Router>
    <PackageList path="/" />
    <PackageDetail path="/package/:id" />
  </Router>
  // Product List / Product Detail routes
  // Basket
  // Currency Switcher
);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxApp;
