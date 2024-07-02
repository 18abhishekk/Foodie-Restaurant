import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render restaurant card component", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const resName = screen.getByText("McDonald's");
  expect(resName).toBeInTheDocument();
});
