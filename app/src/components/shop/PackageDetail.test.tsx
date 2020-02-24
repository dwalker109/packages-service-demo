import { LocationProvider } from "@reach/router";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent } from "@testing-library/react";
import { FetchMock } from "jest-fetch-mock";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import rootReducer from "../../setupRedux";
import { Package } from "../../types";
import PackageDetail from "./PackageDetail";
import { BasketWidget } from "../basket/Basket";
import { clearBasket } from "../basket/basketSlice";

const fetchMock = fetch as FetchMock;
const store = configureStore({ reducer: rootReducer });

const fakePackagesResponse: Package = {
  id: 1,
  name: "test package named abc",
  description: "abc",
  price: 123,
  products: [{ id: "productId", name: "productName", price: 123 }],
};

const mockAndRender = async (): Promise<void> => {
  fetchMock.mockResponse(JSON.stringify(fakePackagesResponse));

  await act(async () => {
    render(
      <Provider store={store}>
        <LocationProvider>
          <PackageDetail />
          <BasketWidget />
        </LocationProvider>
      </Provider>
    );
  });
};

beforeEach(async () => {
  store.dispatch(clearBasket());
});

describe("Renders individual item", () => {
  it("Can display package detail", async () => {
    await mockAndRender();
    expect(screen.queryByText("test package named abc")).toBeInTheDocument();
    expect(screen.queryByText(`productName (productId)`)).toBeInTheDocument();
  });
});

describe("Can shop", () => {
  it("Can add items to the basket", async () => {
    await mockAndRender();

    await act(async () => {
      fireEvent.click(screen.getByText("Add to basket"));
    });

    expect(screen.getByTestId("Subtotal").textContent).toBe("$123.00");
  });

  it("Can add multiple items to the basket and receive a discount", async () => {
    await mockAndRender();

    await act(async () => {
      fireEvent.click(screen.getByText("Add to basket"));
    });

    expect(screen.getByTestId("Subtotal").textContent).toBe("$123.00");
    expect(screen.getByTestId("Discount").textContent).toBe("$0.00");

    await act(async () => {
      fireEvent.click(screen.getByText("Add to basket"));
    });

    expect(screen.getByTestId("Subtotal").textContent).toBe("$246.00");
    expect(screen.getByTestId("Discount").textContent).toBe("$24.60");
    expect(screen.getByTestId("Discount").textContent).toBe("$24.60");
  });
});
