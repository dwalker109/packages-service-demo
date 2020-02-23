import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrency } from "./currencySelectors";
import { setActive, thunkFetchCurrencies } from "./currencySlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { clearBasket } from "../basket/basketSlice";

const CurrencyWidget: FC = () => {
  const { available, active } = useSelector(selectCurrency);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchCurrencies());
  }, [dispatch]);

  return (
    <div className="CurrencyWidget-main">
      <select
        value={active}
        onChange={(e): PayloadAction<string> | false =>
          window.confirm(
            "Switching currency will empty your basket - continue?"
          ) &&
          dispatch(clearBasket()) &&
          dispatch(setActive(e.target.value))
        }
      >
        {available.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyWidget;
