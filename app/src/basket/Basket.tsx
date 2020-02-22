import React, { FC } from "react";
import { useSelector } from "react-redux";
import { BasketLine } from "../types";
import { selectBasketSummarised } from "./basketSelectors";

const BasketPage: FC = () => null;

const BasketWidget: FC = () => {
  const { basketLines, subtotal, discount, grandTotal } = useSelector(
    selectBasketSummarised
  );

  return (
    <div className="BasketWidget-main">
      <ul>
        {basketLines.map((basketLine, index) => (
          <BasketLineWidget key={index} {...basketLine} />
        ))}
      </ul>
      <div className="BasketWidget-subtotal">{subtotal}</div>
      <div className="BasketWidget-discount">{discount}</div>
      <div className="BasketWidget-grandTotal">{grandTotal}</div>
    </div>
  );
};

const BasketLineWidget: FC<BasketLine> = ({ pkg, quantity }) => (
  <li className="BasketLineWidget-main">
    <span className="BasketLineWidget-name">{pkg.name}</span>
    <span className="BasketLineWidget-qty">{quantity}</span>
  </li>
);

export { BasketPage, BasketWidget };
