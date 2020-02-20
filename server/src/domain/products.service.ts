import fetch, { Headers, Response } from "node-fetch";
import { productService } from "../../config";

const url = productService.url;
const authToken = productService.authToken;

interface ApiProduct {
  id: string;
  name: string;
  usdPrice: number;
}

type ApiProductCache = Map<string, ApiProduct>

/**
 * Define a cache and clear it on an interval
 */
const cache: ApiProductCache = new Map();
setInterval(() => cache.clear(), 60 * 1000);

/**
 * Retrieve and cache a product
 */
const getProduct = async (id: string): Promise<ApiProduct> => {
  let product = cache.get(id);
  if (product) return product;

  const headers = new Headers({ Authorization: `Basic ${authToken}` });
  const response = await fetch(`${url}/${id}`, { headers });
  product = await response.json();
  cache.set(id, product);

  return product;
};

/**
 * Retrieve multiple products
 */
const getProducts = async (ids: string[]): Promise<ApiProduct[]> =>
  Promise.all(
    ids.map(async id => getProduct(id))
  );

export { getProduct, getProducts };
