import fetch from "node-fetch";
import { currencyService } from "../../config";
import * as assert from "assert";
import { setTimeout } from "timers";

const { url, refreshMs } = currencyService;
const base: "USD" = "USD"; // US Dollars as the base is required by products API, so enforce type

type CurrencyRateCache = Map<string, number>;

/**
 * Define a cache
 */
let cache: CurrencyRateCache | undefined = undefined;

/**
 * Retrieve and re-cache rates on an interval
 */
const cacheRates = async (): Promise<NodeJS.Timer> => {
  const response = await fetch(`${url}/latest?base=${base}`);
  const { rates } = await response.json();
  cache = new Map(Object.entries(rates));
  return setTimeout(cacheRates, refreshMs);
};

/**
 * Retrieve a rate from the cache
 */
const getRate = (currency: string): number => {
  assert(
    cache,
    "Exchange rate cache is not initialised, please await cacheRates() once first"
  );
  assert(cache.has(currency), `${currency} is not a supported currency`);
  return cache.get(currency);
};

/**
 * Convert a USD amount into another currency
 */
const convert = (usdAmount: number, currency: string): number => {
  const rate = getRate(currency);
  return usdAmount / rate;
};

export { cacheRates, getRate, convert };
