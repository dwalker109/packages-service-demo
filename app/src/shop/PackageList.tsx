import React, { FC, useEffect, useState } from "react";
import NoPackages from "./NoPackages";
import { Package } from "./PackageDetail";
import PackageSummary from "./PackageSummary";
import { RouteComponentProps } from "@reach/router";

const PackageList: FC<RouteComponentProps> = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/packages");
      const data: Package[] = await response.json();

      setPackages(data);
    };

    fetchData();
  }, []);

  return (
    <div className="PackageList-main">
      {!packages.length ? (
        <NoPackages />
      ) : (
        packages.map(({ id, name, description, products, price }) => (
          <PackageSummary key={id} id={id} name={name} price={price} />
        ))
      )}
    </div>
  );
};

export default PackageList;
