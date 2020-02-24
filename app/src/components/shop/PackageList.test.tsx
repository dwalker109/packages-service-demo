import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { FetchMock } from "jest-fetch-mock";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import rootReducer from "../../setupRedux";
import { Package } from "../../types";
import PackageList from "./PackageList";

const fetchMock = fetch as FetchMock;
const store = configureStore({ reducer: rootReducer });

const fakePackagesResponse: Package[] = [
  {
    id: 1,
    name: "test package named abc",
    description: "abc",
    price: 123,
    products: [{ id: "abc", name: "abc", price: 123 }],
  },
  {
    id: 2,
    name: "test package named def",
    description: "def",
    price: 321,
    products: [{ id: "def", name: "def", price: 123 }],
  },
];

const mockAndRender = async (): Promise<void> => {
  fetchMock.mockResponseOnce(JSON.stringify(fakePackagesResponse));

  await act(async () => {
    render(
      <Provider store={store}>
        <PackageList />
      </Provider>
    );
  });
};

describe("Renders list", () => {
  it("Can display a list of packages", async () => {
    await mockAndRender();

    expect(screen.queryByText("test package named abc")).toBeInTheDocument();
    expect(screen.queryByText("test package named def")).toBeInTheDocument();
  });
});

describe("Searches list", () => {
  it("Can filter a list of packages", async () => {
    await mockAndRender();

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText("Type to filter..."), {
        target: { value: "def" },
      });
    });

    expect(screen.queryByText("test package named abc")).toBeNull();
    expect(screen.queryByText("test package named def")).toBeInTheDocument();
  });

  it("Can sort a list of packages", async () => {
    await mockAndRender();

    expect(screen.queryAllByTestId("price").map(el => el.textContent)).toEqual([
      "$123.00",
      "$321.00",
    ]);

    await act(async () => {
      fireEvent.change(screen.getByDisplayValue("Sort by name, A-Z"), {
        target: { value: "price desc" },
      });
    });

    expect(screen.queryAllByTestId("price").map(el => el.textContent)).toEqual([
      "$321.00",
      "$123.00",
    ]);
  });
});
