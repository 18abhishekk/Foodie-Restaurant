import { RES_API } from "./constants";
import { useState, useEffect } from "react";
const useRestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    setResList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return [resList, filteredRestaurant, setFilteredRestaurant];
};
export default useRestaurantList;
