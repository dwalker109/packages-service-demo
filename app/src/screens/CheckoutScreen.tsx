import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import { BasketDetail } from "../components/basket/Basket";
import { ConversionLayout } from "./Layouts";

const CheckoutScreen: FC<RouteComponentProps> = () => (
  <ConversionLayout>
    <BasketDetail />
  </ConversionLayout>
);

export default CheckoutScreen;
