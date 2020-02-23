import React, { FC } from "react";
import { BasketWidget } from "../components/basket/Basket";
import Header from "../components/chrome/Header";

const Main: FC = ({ children }) => (
  <>
    <Header />
    <div className="container py-6 mx-auto text-gray-800">{children}</div>
  </>
);

const StandardLayout: FC = ({ children }) => (
  <div className="grid grid-cols-4 gap-6">
    <div className="col-span-3">{children}</div>
    <div className="col-span-1">
      <BasketWidget />
    </div>
  </div>
);

const MinimalLayout: FC = ({ children }) => (
  <div className="grid grid-cols-4 gap-6">
    <div className="col-span-2 col-start-2">{children}</div>
  </div>
);

export default Main;
export { StandardLayout, MinimalLayout };
