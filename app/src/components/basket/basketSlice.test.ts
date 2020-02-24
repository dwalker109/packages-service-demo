import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../setupRedux";
import { addToBasket, clearBasket, removeFromBasket } from "./basketSlice";
import { Package } from "../../types";

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

describe("Basket operations", () => {
  it("Can add a package to the basket", async () => {
    expect(store.getState().basket.items.length).toEqual(0);
    store.dispatch(addToBasket(fakePackage));
    expect(store.getState().basket.items.length).toEqual(1);
  });

  it("Can remove a package from the basket", async () => {
    expect(store.getState().basket.items.length).toEqual(0);
    store.dispatch(addToBasket(fakePackage));
    expect(store.getState().basket.items.length).toEqual(1);
    store.dispatch(removeFromBasket(fakePackage));
    expect(store.getState().basket.items.length).toEqual(0);
  });

  it("Can clear the basket", async () => {
    expect(store.getState().basket.items.length).toEqual(0);
    store.dispatch(addToBasket(fakePackage));
    store.dispatch(addToBasket(fakePackage));
    store.dispatch(addToBasket(fakePackage));
    store.dispatch(addToBasket(fakePackage));
    store.dispatch(addToBasket(fakePackage));
    expect(store.getState().basket.items.length).toEqual(5);
    store.dispatch(clearBasket());
    expect(store.getState().basket.items.length).toEqual(0);
  });
});
