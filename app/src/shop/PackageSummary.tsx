import React, { FC } from "react";

interface PackageSummaryProps {
  id: string;
  name: string;
  price: number;
}

const PackageSummary: FC<PackageSummaryProps> = ({ id, name, price }) => (
  <div className="PackageSummary-main">
    <h3>{name}</h3>
    <p className="PackageSummary-price">{price}</p>
  </div>
);

export default PackageSummary;
