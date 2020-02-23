import { Router } from "@reach/router";
import { configureStore } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { Provider } from "react-redux";
import CheckoutScreen from "./screens/CheckoutScreen";
import DetailScreen from "./screens/DetailScreen";
import StorefrontScreen from "./screens/StorefrontScreen";
import rootReducer from "./setupRedux";

const store = configureStore({ reducer: rootReducer });

const App: FC = () => (
  <Router>
    <StorefrontScreen path="/" />
    <DetailScreen path="/package/:id" />
    <CheckoutScreen path="/basket" />
  </Router>
);

const ReduxApp: FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxApp;
