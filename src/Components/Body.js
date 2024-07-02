import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "./utils/useRestaurantList";
import useOnlineStatus from "./utils/useOnlineStatus.js";

const Body = () => {
  const [searchText, setSearchText] = useState([""]);
  const [resList, filteredRestaurant, setFilteredRestaurant] =
    useRestaurantList();
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!!! Please check your internet connect</h1>
    );
  }
  // conditional rendering
  if (resList.length == 0) {
    return <Shimmer />;
  }
  if (searchText.length == 0 && filteredRestaurant != resList) {
    setFilteredRestaurant(resList);
  }
  return (
    <div className="body">
      <div className="bars flex justify-center">
        <div className="search m-4 p-2">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border-2 p-2 mx-4 rounded-lg border-gray-300 focus:border-gray-600"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchbtn px-4 py-2 bg-green-400 rounded-lg"
            onClick={() => {
              const filteredRestaurant = resList.filter((obj) =>
                obj.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter m-4 p-2">
          <button
            className="filter-btn px-4 py-2 bg-green-400 rounded-lg"
            onClick={() => {
              const filteredList = resList.filter(
                (obj) => obj.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap mx-auto mb-10 text-center text-pretty justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="mb-6"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant}></RestaurantCard>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
