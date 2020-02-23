import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import { BasketWidget } from "../components/basket/Basket";
import PackageList from "../components/shop/PackageList";
import Header from "../components/chrome/Header";

const StorefrontScreen: FC<RouteComponentProps> = () => (
  <div className="container p-6 mx-auto">
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-4">
        <Header />
      </div>
      <div className="col-span-3">
        <PackageList />
      </div>
      <div className="col-span-1">
        <BasketWidget />
      </div>
    </div>
  </div>
);

export default StorefrontScreen;
