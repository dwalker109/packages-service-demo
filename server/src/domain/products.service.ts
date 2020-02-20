import fetch, { Headers, Response } from "node-fetch";
import { productService } from "../../config";

const url = productService.url;
const authToken = productService.authToken;

interface ApiProduct {
  id: string;
  name: string;
  usdPrice: number;
}

const getProduct = async (id: string): Promise<Response> => {
  const headers = new Headers({ Authorization: `Basic ${authToken}` });
  return fetch(`${url}/${id}`, { headers });
};

const getProducts = async (ids: string[]): Promise<ApiProduct[]> =>
  Promise.all(
    ids.map(async id => {
      const response = await getProduct(id);
      return response.json();
    })
  );

export { getProduct, getProducts };
