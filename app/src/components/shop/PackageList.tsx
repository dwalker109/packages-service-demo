import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Package } from "../../types";
import { selectCurrency } from "../currency/currencySelectors";
import PackageSummary from "./PackageSummary";

const PackageList: FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const { active: currency } = useSelector(selectCurrency);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        `http://localhost:3001/packages?currency=${currency}`
      );
      const data: Package[] = await response.json();

      setPackages(data);
    };

    fetchData();
  }, [currency]);

  return (
    <div className="PackageList-main">
      {!packages.length ? (
        <NoPackages />
      ) : (
        packages.map(pkg => <PackageSummary key={pkg.id} pkg={pkg} />)
      )}
    </div>
  );
};

const NoPackages: FC = () => (
  <div className="NoPackages-main">No packages!</div>
);

export default PackageList;
