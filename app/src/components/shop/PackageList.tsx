import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Package, SortDef, ValidSorts } from "../../types";
import { selectCurrency } from "../currency/currencySelectors";
import PackageSummary from "./PackageSummary";
import {
  defaultSort,
  filterPackages,
  sortings,
  sortPackages,
} from "./packageUtils";
import Loading from "../chrome/Loading";

const PackageList: FC = () => {
  const [apiPackages, setApiPackages] = useState<Package[]>([]);
  const [displayPackages, setDisplayPackages] = useState<Package[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<SortDef>(defaultSort);

  const { active: currency } = useSelector(selectCurrency);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        `http://localhost:3001/packages?currency=${currency}`
      );
      const data: Package[] = await response.json();

      setApiPackages(data);
    };

    fetchData();
  }, [currency]);

  useEffect(() => {
    const filteredPackages = filterPackages(apiPackages, filter);
    const sortedPackages = sortPackages(filteredPackages, sort);

    setDisplayPackages(sortedPackages);
  }, [filter, apiPackages, sort]);

  return (
    <div className="">
      <div className="flex justify-between pb-6">
        <input
          className="flex-1 shadow appearance-none border rounded-lg rounded-r-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Type to filter..."
          value={filter}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setFilter(e.target.value)
          }
        />
        <select
          className="shadow appearance-none border rounded-lg rounded-l-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="choose-sort"
          value={sort.id}
          onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
            setSort(sortings.get(e.target.value as ValidSorts) || defaultSort)
          }
        >
          {Array.from(sortings.values()).map(sortDef => (
            <option key={sortDef.id} value={sortDef.id}>
              {sortDef.text}
            </option>
          ))}
        </select>
      </div>
      <div className="PackageList-main">
        {!displayPackages.length ? (
          <Loading />
        ) : (
          <div className="PackageList-packages">
            {displayPackages.map(pkg => (
              <PackageSummary key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageList;
