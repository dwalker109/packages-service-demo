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
 * Setup the various sort constructs and construct a Map (this
 * makes lookups from the TSX more straightforward)
 */
const sortingsSetup: [ValidSorts, SortDef][] = [
  [
    "name asc",
    {
      id: "name asc",
      text: "Sort by name, A-Z",
      term: "name",
      dir: "asc",
    },
  ],
  [
    "name desc",
    {
      id: "name desc",
      text: "Sort by name, Z-A",
      term: "name",
      dir: "desc",
    },
  ],
  [
    "price asc",
    {
      id: "price asc",
      text: "Sort by price, low to high",
      term: "price",
      dir: "asc",
    },
  ],
  [
    "price desc",
    {
      id: "price desc",
      text: "Sort by price, high to low",
      term: "price",
      dir: "desc",
    },
  ],
];
const sortings: SortingOptions = new Map(sortingsSetup);
/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
const defaultSort = sortings.get("name asc")!;

/**
 * Sort a package list based on provided sort def
 */
const sortPackages = (packages: Package[], sort: SortDef): Package[] => {
  const { term } = sort;
  const [sda, sdb] = sort.dir === "asc" ? [-1, +1] : [+1, -1];
  const sorted = packages.sort((a, b): number =>
    a[term] < b[term] ? sda : sdb
  );

  return sorted;
};

export { filterPackages, sortings, defaultSort, sortPackages };
