import { Link, RouteComponentProps } from "@reach/router";
import { PayloadAction } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasketLine, Package } from "../../types";
import { selectCurrencyFormatter } from "../currency/currencySelectors";
import { selectBasketSummarised } from "./basketSelectors";
import { addToBasket, removeFromBasket } from "./basketSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div className="text-right">
      <CurrencyLine label="Subtotal" amount={subtotal} />
      <CurrencyLine label="Discount" amount={discount} />
      <CurrencyLine label="Grand Total" amount={grandTotal} />
      <Link to="/basket">
        <button className="btn-default">
          <FontAwesomeIcon icon={faShoppingBasket} /> View full basket
        </button>
      </Link>
    </div>
  );
};

const CurrencyLine: FC<{ label: string; amount: number }> = ({
  label,
  amount,
}) => {
  const { format } = useSelector(selectCurrencyFormatter);

  return (
    <div className="">
      <span className="font-hairline pr-2">{label}</span>
      <span>{format(amount)}</span>
    </div>
  );
};

export { BasketDetail, BasketWidget };
