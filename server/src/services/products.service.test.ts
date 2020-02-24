// MUST HAPPEN BEFORE ANY IMPORTS FOR ENV TO BE USED IN TEST!
const path = require("path");
require("dotenv").config({
  path: path.resolve(process.cwd(), ".env"),
});

import { getProduct, Product, shutdown, getProducts } from "./products.service";

beforeAll(async () => {
  jest.setTimeout(30 * 1000); // Product API can take 10 secs to wake sometimes
});

afterAll(async () => {
  shutdown();
});

describe("Product fetching", () => {
  it("Can retrieve a single product", async () => {
    const product = await getProduct("PKM5pGAh9yGm");
    expect(product).toMatchObject<Product>({
      id: "PKM5pGAh9yGm",
      name: "Axe",
      price: 799,
    });
  });

  it("Can retrieve multiple producta", async () => {
    const product = await getProducts(["PKM5pGAh9yGm", "PKM5pGAh9yGm"]);
    expect(product).toMatchObject<Product[]>([
      {
        id: "PKM5pGAh9yGm",
        name: "Axe",
        price: 799,
      },
      {
        id: "PKM5pGAh9yGm",
        name: "Axe",
        price: 799,
      },
    ]);
  });
});
