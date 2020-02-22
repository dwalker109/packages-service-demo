import React, { FC, useEffect, useState } from "react";
import NoPackages from "./NoPackages";
import { Package } from "../types";
import PackageSummary from "./PackageSummary";
import { RouteComponentProps } from "@reach/router";
import { useSelector } from "react-redux";
import { selectCurrency } from "../currency/currencySelectors";

const PackageList: FC<RouteComponentProps> = () => {
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

export default PackageList;
