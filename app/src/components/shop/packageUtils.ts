import { SortingOptions, ValidSorts, SortDef, Package } from "../../types";

/**
 * Filter a package list based on a provided sort string
 */
const filterPackages = (packages: Package[], term: string): Package[] => {
  const lcTerm = term.toLowerCase();
  const filtered = packages.filter(
    pkg =>
      pkg.id.toString().includes(lcTerm) ||
      pkg.name.toLowerCase().includes(lcTerm) ||
      pkg.description.toLowerCase().includes(lcTerm)
  );

  return filtered;
};

/**
 * Setup the various sort constructs and construct a Map
 */
const sortingsSetup: [ValidSorts, SortDef][] = [
  [
    "name asc",
    { id: "name asc", text: "Name, ascending", term: "name", direction: "asc" },
  ],
  [
    "name desc",
    {
      id: "name desc",
      text: "Name, descending",
      term: "name",
      direction: "desc",
    },
  ],
  [
    "price asc",
    {
      id: "price asc",
      text: "Price, ascending",
      term: "price",
      direction: "asc",
    },
  ],
  [
    "price desc",
    {
      id: "price desc",
      text: "Price, descending",
      term: "price",
      direction: "desc",
    },
  ],
];
const sortings: SortingOptions = new Map(sortingsSetup);

/**
 * Sort a package list based on provided sort def
 */
const sortPackages = (packages: Package[], sort: SortDef): Package[] => {
  const { term } = sort;
  const [sda, sdb] = sort.direction === "asc" ? [-1, +1] : [+1, -1];
  const sorted = packages.sort((a, b): number =>
    a[term] < b[term] ? sda : sdb
  );

  return sorted;
};

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const defaultSort = sortings.get("name asc")!;

export { filterPackages, sortings, defaultSort, sortPackages };
