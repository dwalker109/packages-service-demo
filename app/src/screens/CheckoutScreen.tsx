import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import { BasketDetail } from "../components/basket/Basket";
import { MinimalLayout } from "./Layouts";

const CheckoutScreen: FC<RouteComponentProps> = () => (
  <MinimalLayout>
    <BasketDetail />
  </MinimalLayout>
);

export default CheckoutScreen;
