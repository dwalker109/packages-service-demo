import fetch, { Headers, RequestInfo, RequestInit, Response } from "node-fetch";
import { productService } from "../../config";
import Bottleneck from "bottleneck";

const { url, authToken, minTime, maxConcurrent } = productService;

// Define a rate limited instance of fetch to avoid API blocking
const limiter = new Bottleneck({ minTime, maxConcurrent });
const rateLimitedFetch: (
  url: RequestInfo,
  init: RequestInit
) => Promise<Response> = limiter.wrap(fetch);

type ApiProduct = {
  id: string;
  name: string;
  usdPrice: number;
};

export type Product = {
  id: string;
  name: string;
  price: number;
};

type ProductCache = Map<string, Product>;

/**
 * Define a cache and clear it on an interval - also define a function
 * to allow it to be shutdown on service close (or tests ending)
 */
const cache: ProductCache = new Map();
const cacheTimer = setInterval(() => cache.clear(), 60 * 1000);
const shutdown = (): void => clearInterval(cacheTimer);

/**
 * Retrieve and cache a product
 */
const getProduct = async (id: string): Promise<Product> => {
  // Return straight from cache if we have it
  let product: Product = cache.get(id);
  if (product) return product;

  // Not in cache, retrieve via API
  const headers = new Headers({ Authorization: `Basic ${authToken}` });
  const response = await rateLimitedFetch(`${url}/${id}`, { headers });
  const apiProduct: ApiProduct = await response.json();

  // Convert to our local type, and cache
  product = {
    id: apiProduct.id,
    name: apiProduct.name,
    price: apiProduct.usdPrice,
  };
  cache.set(id, product);

  return product;
};

/**
 * Retrieve multiple products
 */
const getProducts = async (ids: string[]): Promise<Product[]> =>
  Promise.all(ids.map(async id => getProduct(id)));

export { getProduct, getProducts, shutdown };
