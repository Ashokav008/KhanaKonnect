import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../config";

const useRestaurant = (restaurantId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantMenu(restaurantId);
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(RESTAURANT_MENU_URL + restaurantId);
    const json = await data.json();
    setRestaurantMenu(
      json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  return restaurantMenu;
};

export default useRestaurant;
