import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../setupRedux";
import { BasketState, BasketSummary, Package } from "../../types";
import {
  selectBasket,
  selectBasketItems,
  selectBasketSummarised,
} from "./basketSelectors";
import { addToBasket, clearBasket } from "./basketSlice";

const store = configureStore({ reducer: rootReducer });

const fakePackage: Package = {
  id: 1,
  name: "test package named abc",
  description: "abc",
  price: 123,
  products: [{ id: "productId", name: "productName", price: 123 }],
};

beforeEach(async () => {
  store.dispatch(clearBasket());
});

describe("Basket selector operations", () => {
  it("Can retrieve slice store", async () => {
    expect(selectBasket(store.getState())).toEqual<BasketState>({ items: [] });
  });

  it("Can retrieve basket items", async () => {
    expect(selectBasketItems(store.getState())).toEqual<Package[]>([]);
  });

  it("Can retrieve a basket summary", async () => {
    store.dispatch(addToBasket(fakePackage));
    store.dispatch(addToBasket(fakePackage));
    expect(selectBasketSummarised(store.getState())).toMatchObject<
      BasketSummary
    >({
      basketLines: [
        {
          pkg: {
            id: 1,
            name: "test package named abc",
            description: "abc",
            price: 123,
            products: [{ id: "productId", name: "productName", price: 123 }],
          },
          quantity: 2,
        },
      ],
      subtotal: 246,
      discount: 24.6,
      grandTotal: 221.4,
    });
  });
});
