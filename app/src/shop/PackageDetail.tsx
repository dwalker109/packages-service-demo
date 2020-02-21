import React, { FC } from "react";

export interface Product {
  id: string;
  name: string;
  usdPrice: number;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  products: Product[];
  price: number;
}

interface PackageDetailProps extends Package {
  // key: string;
}

const PackageDetail: FC<PackageDetailProps> = ({
  id,
  name,
  description,
  products,
  price,
}) => {
  return (
    <div className="PackageDetail-main">
      <h2>{name}</h2>
      <p className="PackageDetail-price">{price}</p>
      <p className="PackageDetail-description">{description}</p>
      <ul className="PackageDetail-products">
        {products.map(product => (
          <li key={product.id}>{`${product.name} (${product.id})`}</li>
        ))}
      </ul>
    </div>
  );
};

PackageDetail.defaultProps = {
  products: [],
};

export default PackageDetail;
