import { CDN_URL } from "./utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 border-2 p-2 w-60 h-full rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-300 hover:scale-110 transition-transform duration-300 text-slate-800 "
    >
      <img
        className="restaurant-logo rounded-lg w-56 h-44"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="py-2 font-bold text-lg">{name}</h3>
      <h4 className="overflow-ellipsis">{cuisines.join(", ")}</h4>
      <h4 className="linkr">{avgRating + " stars"} </h4>
      <h4 className="linkr">{resData.info.sla.deliveryTime + " mins time"}</h4>
    </div>
  );
};
export default RestaurantCard;
