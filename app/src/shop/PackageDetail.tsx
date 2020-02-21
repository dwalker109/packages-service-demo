import { RouteComponentProps, useParams } from "@reach/router";
import React, { FC, useEffect, useState } from "react";
import BasketAddButton from "../basket/BasketAddButton";
import { Package } from "../types";

const PackageDetail: FC<RouteComponentProps> = () => {
  const { id } = useParams();
  const [pkg, setPackage] = useState<Package | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(`http://localhost:3001/packages/${id}`);
      const data: Package = await response.json();

      setPackage(data);
    };

    fetchData();
  }, [id]);

  return (
    <div className="PackageDetail-main">
      {!pkg ? (
        <div className="PackageDetail-loading">Loading</div>
      ) : (
        <>
          <h2>{pkg.name}</h2>
          <p className="PackageDetail-price">{pkg.price}</p>
          <p className="PackageDetail-description">{pkg.description}</p>
          <ul className="PackageDetail-products">
            {pkg.products.map(product => (
              <li key={product.id}>{`${product.name} (${product.id})`}</li>
            ))}
          </ul>
          <BasketAddButton pkg={pkg} quantity={1} />
        </>
      )}
    </div>
  );
};

export default PackageDetail;
