import { Router } from "@reach/router";
import { configureStore } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BasketPage, BasketWidget } from "./basket/Basket";
import CurrencyWidget from "./currency/CurrencyWidget";
import rootReducer from "./setupRedux";
import PackageDetail from "./shop/PackageDetail";
import PackageList from "./shop/PackageList";

const store = configureStore({ reducer: rootReducer });

const App: FC = () => (
  <>
    <Router>
      <PackageList path="/" />
      <PackageDetail path="/package/:id" />
      <BasketPage path="/basket" />
    </Router>
    <BasketWidget />
    <CurrencyWidget />
  </>
);

const ReduxApp: FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxApp;
