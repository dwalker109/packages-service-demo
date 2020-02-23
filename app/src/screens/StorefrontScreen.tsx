import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { BasketWidget } from "../components/basket/Basket";
import CurrencyWidget from "../components/currency/CurrencyWidget";
import PackageList from "../components/shop/PackageList";

const StorefrontScreen: FC<RouteComponentProps> = () => (
  <>
    <PackageList />
    <BasketWidget />
    <CurrencyWidget />
  </>
);

export default StorefrontScreen;
