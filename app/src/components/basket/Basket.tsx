import { Link, RouteComponentProps } from "@reach/router";
import { PayloadAction } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasketLine, Package } from "../../types";
import { selectCurrencyFormatter } from "../currency/currencySelectors";
import { selectBasketSummarised } from "./basketSelectors";
import { addToBasket, removeFromBasket } from "./basketSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import BackToPackageList from "../chrome/BackToPackageList";

const BasketDetail: FC<RouteComponentProps> = () => {
  const { basketLines, subtotal, discount, grandTotal } = useSelector(
    selectBasketSummarised
  );

  return (
    <>
      <div className="border rounded-lg border-gray-300">
        <div className="p-8">
          {basketLines.length === 0 ? (
            <div className="text-2xl text-center">Your basket is empty</div>
          ) : (
            <BasketLinesTable basketLines={basketLines} />
          )}
        </div>
        <div className="p-8 text-center">
          <CurrencyLine label="Subtotal" amount={subtotal} />
          <CurrencyLine label="Discount" amount={discount} />
          <CurrencyLine label="Grand Total" amount={grandTotal} />
        </div>
        <div className="bg-gray-200 rounded-lg rounded-t-none p-8 text-center">
          <button className="btn-default">Checkout</button>
        </div>
      </div>
      <BackToPackageList />
    </>
  );
};

const BasketLinesTable: FC<{ basketLines: BasketLine[] }> = ({
  basketLines,
}) => {
  const dispatch = useDispatch();

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Package</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2"></th>
          <th className="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        {basketLines.map(({ pkg, quantity }) => (
          <tr key={pkg.id} className="text-center">
            <td className="px-4 py-2">{pkg.name}</td>
            <td className="px-4 py-2">{quantity}</td>
            <td className="px-4 py-2">
              <button
                className="btn-default"
                onClick={(): PayloadAction<Package> =>
                  dispatch(addToBasket(pkg))
                }
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </td>
            <td className="px-4 py-2">
              <button
                className="btn-default"
                onClick={(): PayloadAction<Package> =>
                  dispatch(removeFromBasket(pkg))
                }
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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
