import React, { FC } from "react";
import { Link } from "@reach/router";

interface PackageSummaryProps {
  id: string;
  name: string;
  price: number;
}

const PackageSummary: FC<PackageSummaryProps> = ({ id, name, price }) => (
  <div className="PackageSummary-main">
    <Link to={`/package/${id}`}>
      <h3>{name}</h3>
    </Link>
    <p className="PackageSummary-price">{price}</p>
  </div>
);

export default PackageSummary;
