import { RouteComponentProps, Link } from "@reach/router";
import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BasketLine, Package } from "../../types";
import { selectBasketSummarised } from "./basketSelectors";
import { addToBasket, removeFromBasket } from "./basketSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  selectCurrency,
  selectCurrencyFormatter,
} from "../currency/currencySelectors";

const BasketDetail: FC<RouteComponentProps> = () => {
  const { basketLines, subtotal, discount, grandTotal } = useSelector(
    selectBasketSummarised
  );
  const { format } = useSelector(selectCurrencyFormatter);

  return (
    <div className="BasketDetail-main">
      <ul>
        {basketLines.map(basketLine => (
          <BasketLineWidget key={basketLine.pkg.id} {...basketLine} />
        ))}
      </ul>
      <div className="BasketDetail-subtotal">{format(subtotal)}</div>
      <div className="BasketDetail-discount">{format(discount)}</div>
      <div className="BasketDetail-grandTotal">{format(grandTotal)}</div>
    </div>
  );
};

const BasketLineWidget: FC<BasketLine> = ({ pkg, quantity }) => {
  const dispatch = useDispatch();

  return (
    <li className="BasketLineWidget-main">
      <span className="BasketLineWidget-name">{pkg.name}</span>
      <span className="BasketLineWidget-id">{pkg.id}</span>
      <span className="BasketLineWidget-qty">{quantity}</span>
      <div className="BasketLineWidget-actions">
        <button
          onClick={(): PayloadAction<Package> => dispatch(addToBasket(pkg))}
        >
          +
        </button>
        <button
          onClick={(): PayloadAction<Package> =>
            dispatch(removeFromBasket(pkg))
          }
        >
          -
        </button>
      </div>
    </li>
  );
};

const BasketWidget: FC = () => {
  const { subtotal, discount, grandTotal } = useSelector(
    selectBasketSummarised
  );
  const { format } = useSelector(selectCurrencyFormatter);

  return (
    <div className="BasketWidget-main">
      <div className="BasketWidget-subtotal">{format(subtotal)}</div>
      <div className="BasketWidget-discount">{format(discount)}</div>
      <div className="BasketWidget-grandTotal">{format(grandTotal)}</div>
      <Link to="/basket">View full basket</Link>
    </div>
  );
};

export { BasketDetail, BasketWidget };
