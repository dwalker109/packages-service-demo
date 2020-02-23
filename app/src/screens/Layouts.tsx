import React, { FC } from "react";
import Header from "../components/chrome/Header";
import { BasketWidget } from "../components/basket/Basket";

const MainLayout: FC = props => (
  <div className="container p-6 mx-auto">
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-4">
        <Header />
      </div>
      <div className="col-span-3">{props.children}</div>
      <div className="col-span-1">
        <BasketWidget />
      </div>
    </div>
  </div>
);

const ConversionLayout: FC = props => (
  <div className="container p-6 mx-auto">
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-4">
        <Header />
      </div>
      <div className="col-span-2 col-start-2">{props.children}</div>
    </div>
  </div>
);

export { MainLayout, ConversionLayout };
