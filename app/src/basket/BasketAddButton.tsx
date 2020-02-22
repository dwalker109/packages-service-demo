import { PayloadAction } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Package } from "../types";
import { addToBasket } from "./basketSlice";

type AddToBasketProps = {
  pkg: Package;
};

const AddToBasket: FC<AddToBasketProps> = ({ pkg }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={(): PayloadAction<Package> => dispatch(addToBasket(pkg))}>
      Add to basket
    </button>
  );
};

export default AddToBasket;
