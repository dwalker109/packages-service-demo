import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import CurrencyWidget from "../currency/CurrencyWidget";

const Header: FC = () => (
  <div className="flex items-center justify-between">
    <FontAwesomeIcon icon={faBoxOpen} size="4x" />
    <h1 className="text-4xl">Dan&apos;s Package Store</h1>
    <CurrencyWidget />
  </div>
);

export default Header;
