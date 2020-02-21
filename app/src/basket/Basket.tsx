import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectBasketItems } from "./basketSelectors";
import { Package } from "../types";

const BasketPage: FC = () => null;

const BasketWidget: FC = () => {
  const basketItems = useSelector(selectBasketItems);

  return (
    <div className="BasketWidget-main">
      <ul>
        {basketItems &&
          basketItems.map((basketItem, index) => (
            <BasketLine key={index} {...basketItem} />
          ))}
      </ul>
    </div>
  );
};

const BasketLine: FC<Package> = basketItem => (
  <li className="BasketLine-main">{basketItem.id}</li>
);

export { BasketPage, BasketWidget };
