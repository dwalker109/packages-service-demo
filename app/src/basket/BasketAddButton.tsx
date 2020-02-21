import React, { FC } from "react";
import { PayloadAction } from "@reduxjs/toolkit";
import { AddToBasketPayload, Package } from "../types";
import { useDispatch } from "react-redux";
import { addToBasket } from "./basketSlice";

type AddToBasketProps = {
  pkg: Package;
  quantity: number;
};

const AddToBasket: FC<AddToBasketProps> = ({ pkg, quantity }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={(): PayloadAction<AddToBasketPayload> =>
        dispatch(addToBasket({ item: pkg, quantity: 1 }))
      }
    >
      Add to basket
    </button>
  );
};

export default AddToBasket;
