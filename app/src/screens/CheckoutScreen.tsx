import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import { BasketDetail } from "../components/basket/Basket";

const CheckoutScreen: FC<RouteComponentProps> = () => (
  <>
    <BasketDetail />
  </>
);

export default CheckoutScreen;
