import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDolly } from "@fortawesome/free-solid-svg-icons";
import CurrencyWidget from "../currency/CurrencyWidget";

const Header: FC = () => (
  <div className="bg-gray-100 mx-auto p-6 border-gray-400 border-b-1 shadow-lg">
    <div className="flex items-center justify-between">
      <FontAwesomeIcon icon={faDolly} size="4x" className="text-indigo-500" />
      <h1 className="text-4xl font-thin tracking-tighter text-gray-600">
        Dan&apos;s Package Store
      </h1>
      <CurrencyWidget />
    </div>
  </div>
);

export default Header;
