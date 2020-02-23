import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import { BasketWidget } from "../components/basket/Basket";
import CurrencyWidget from "../components/currency/CurrencyWidget";
import PackageDetail from "../components/shop/PackageDetail";

const DetailScreen: FC<RouteComponentProps> = () => (
  <>
    <PackageDetail />
    <BasketWidget />
    <CurrencyWidget />
  </>
);

export default DetailScreen;
