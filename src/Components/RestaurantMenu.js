import useRestaurantMenu from "./utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, city, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  // .log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleToggle = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {name}, {city}
      </h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
