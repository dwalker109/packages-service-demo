import { useParams } from "@reach/router";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicApi } from "../../config";
import { Package } from "../../types";
import BasketAddButton from "../basket/BasketAddButton";
import BackToPackageList from "../chrome/BackToPackageList";
import Loading from "../chrome/Loading";
import {
  selectCurrency,
  selectCurrencyFormatter,
} from "../currency/currencySelectors";

const PackageDetail: FC = () => {
  const { id } = useParams();
  const [pkg, setPackage] = useState<Package | null>(null);
  const { active: currency } = useSelector(selectCurrency);

  const { format } = useSelector(selectCurrencyFormatter);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        `${publicApi.url}/packages/${id}?currency=${currency}`
      );
      const data: Package = await response.json();

      setPackage(data);
    };

    fetchData();
  }, [id, currency]);

  return (
    <>
      {!pkg ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-between border rounded-lg border-gray-300">
            <div className="flex-1 p-8">
              <h2 className="text-3xl">{pkg.name}</h2>
              <p className="">{pkg.description}</p>
              <div className="pt-8">
                <h3 className="text-lg">Contains</h3>
                <ul className="text-sm font-thin">
                  {pkg.products.map((product, index) => (
                    <li
                      key={index}
                      className="text-sm"
                    >{`${product.name} (${product.id})`}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <p className="font-thin">{format(pkg.price)}</p>
                <BasketAddButton pkg={pkg} />
              </div>
            </div>
            <div
              className="overflow-hidden rounded-r"
              style={{
                backgroundImage: `url(https://picsum.photos/200/400?random=${pkg.id})`,
                backgroundSize: "cover",
                width: "200px",
              }}
            />
          </div>
          <BackToPackageList />
        </>
      )}
    </>
  );
};

export default PackageDetail;
