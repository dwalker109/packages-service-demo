import { RouteComponentProps, useParams } from "@reach/router";
import React, { FC, useEffect, useState } from "react";
import BasketAddButton from "../basket/BasketAddButton";
import { Package } from "../types";
import { useSelector } from "react-redux";
import { selectCurrency } from "../currency/currencySelectors";

const PackageDetail: FC<RouteComponentProps> = () => {
  const { id } = useParams();
  const [pkg, setPackage] = useState<Package | null>(null);
  const { active: currency } = useSelector(selectCurrency);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        `http://localhost:3001/packages/${id}?currency=${currency}`
      );
      const data: Package = await response.json();

      setPackage(data);
    };

    fetchData();
  }, [id, currency]);

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
          <BasketAddButton pkg={pkg} />
        </>
      )}
    </div>
  );
};

export default PackageDetail;
