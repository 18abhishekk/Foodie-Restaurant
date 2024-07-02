import RestaurantMenu from "../RestaurantMenu";
import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import Cart from "../Cart";
import { Provider } from "react-redux";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load restaurant menu", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);
  const items = screen.getAllByTestId("foodItems");
  expect(items.length).toBe(20);
});

it("Should change cart items header to 1", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);

  const addBtn = screen.getAllByRole("button", { name: "+" });
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart-1")).toBeInTheDocument();
});

it("Should have items in cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);

  const addBtn = screen.getAllByRole("button", { name: "+" });
  fireEvent.click(addBtn[0]);
  const items = screen.getAllByTestId("foodItems");
  expect(items.length).toBe(22);
});
