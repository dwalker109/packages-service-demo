import React, { FC } from "react";
import { Link } from "@reach/router";
import { Package } from "../../types";
import BasketAddButton from "../basket/BasketAddButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectCurrencyFormatter } from "../currency/currencySelectors";

type PackageSummaryProps = {
  pkg: Package;
};

const PackageSummary: FC<PackageSummaryProps> = ({ pkg }) => {
  const { format } = useSelector(selectCurrencyFormatter);

  return (
    <div className="flex justify-between mb-8 border rounded-lg border-gray-300">
      <div
        className="overflow-hidden rounded-l"
        style={{
          backgroundImage: `url(https://picsum.photos/100?random=${pkg.id})`,
          width: "100px",
          height: "100px",
        }}
      />
      <div className="flex flex-grow flex-col p-6">
        <span className="text-xl font-bold">{pkg.name}</span>
        <span>{format(pkg.price)}</span>
      </div>
      <div className="flex flex-none flex-col justify-center pr-2">
        <Link to={`/package/${pkg.id}`} className="mb-2">
          <button className="btn-default w-full">
            <FontAwesomeIcon icon={faInfoCircle} /> View details
          </button>
        </Link>
        <BasketAddButton pkg={pkg} />
      </div>
    </div>
  );
};

export default PackageSummary;
