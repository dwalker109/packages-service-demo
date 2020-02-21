import React, { useState, useEffect, FC } from "react";
import PackageDetail, { Package } from "./PackageDetail";
import NoPackages from "./NoPackages";

const PackageList: FC = () => {
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
          <PackageDetail
            key={id}
            id={id}
            name={name}
            description={description}
            products={products || undefined}
            price={price}
          />
        ))
      )}
    </div>
  );
};

export default PackageList;
