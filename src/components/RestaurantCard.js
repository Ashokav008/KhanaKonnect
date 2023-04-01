import { CDN_IMG_URL } from "../config";

export const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
    restaurant.data;
  return (
    <div className="card">
      <img src={CDN_IMG_URL + cloudinaryImageId} alt="restaurantImage" />
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")} </h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};
