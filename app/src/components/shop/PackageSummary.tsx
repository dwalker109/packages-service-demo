import React, { FC } from "react";
import { Link } from "@reach/router";
import { Package } from "../../types";
import BasketAddButton from "../basket/BasketAddButton";

type PackageSummaryProps = {
  pkg: Package;
};

const PackageSummary: FC<PackageSummaryProps> = ({ pkg }) => (
  <div className="PackageSummary-main">
    <Link to={`/package/${pkg.id}`}>
      <h3>{pkg.name}</h3>
    </Link>
    <p className="PackageSummary-price">{pkg.price}</p>
    <BasketAddButton pkg={pkg} />
  </div>
);

export default PackageSummary;
