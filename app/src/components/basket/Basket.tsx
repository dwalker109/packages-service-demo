import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { BasketLine } from "../../types";
import { selectBasketSummarised } from "./basketSelectors";

const BasketDetail: FC<RouteComponentProps> = () => {
  const { basketLines, subtotal, discount, grandTotal } = useSelector(
    selectBasketSummarised
  );

  return (
    <div className="BasketPage-main">
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

const BasketWidget: FC = () => {
  const { subtotal, discount, grandTotal } = useSelector(
    selectBasketSummarised
  );

  return (
    <div className="BasketWidget-main">
      <div className="BasketWidget-subtotal">{subtotal}</div>
      <div className="BasketWidget-discount">{discount}</div>
      <div className="BasketWidget-grandTotal">{grandTotal}</div>
    </div>
  );
};

export { BasketDetail, BasketWidget };
