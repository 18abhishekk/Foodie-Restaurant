import { render, screen, act, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});

it("Should search restaurant list for pizza input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInp = screen.getByTestId("searchInput");
  fireEvent.change(searchInp, { target: { value: "Pizza" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(5);
});

it("Should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeButton = screen.getAllByTestId("resCard");
  expect(cardsBeforeButton.length).toBe(20);

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(filterBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(7);
});
