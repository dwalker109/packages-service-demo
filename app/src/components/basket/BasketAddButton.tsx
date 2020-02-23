import { PayloadAction } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Package } from "../../types";
import { addToBasket } from "./basketSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

type AddToBasketProps = {
  pkg: Package;
};

const AddToBasket: FC<AddToBasketProps> = ({ pkg }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn-default"
      onClick={(): PayloadAction<Package> => dispatch(addToBasket(pkg))}
    >
      <FontAwesomeIcon icon={faCartPlus} /> Add to basket
    </button>
  );
};

export default AddToBasket;
