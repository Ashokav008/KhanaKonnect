import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import { RESTAURANT_MENU_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  let params = useParams();
  let { restaurantId } = params;
  // const [restaurantMenu, setRestaurantMenu] = useState(null);
  // const [innerRestaurantMenu, setInnerRestaurantMenu] = useState([]);
  const restaurantMenu = useRestaurant(restaurantId);
  // async function getRestaurantMenu() {
  //   const data = await fetch(RESTAURANT_MENU_URL + restaurantId);
  //   const json = await data.json();
  //   // console.log(json.data);
  //   // setRestaurantMenu(json.data.cards[2]);
  //   setRestaurantMenu(
  //     json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards
  //   );
  //   // console.log("Printing  " + restaurantMenu);
  // }

  // useEffect(() => {
  //   getRestaurantMenu(restaurantId);
  // }, []);

  if (!restaurantMenu) return null;
  //   if (restaurantMenu === undefined) return null;

  return (
    <>
      <div>
        {/* <h1>Card Data</h1> */}
        <div className="restaurant-menu-list">
          {restaurantMenu.map((card, index) => (
            <li key={index}>
              {card.card.card.itemCards?.map((itemCard, index) => (
                <div key={index}>
                  <MenuCard key={index} data={itemCard} />
                  {/* <h2>Item Card {index + 1}</h2>
                  <p>Price: {itemCard?.card?.info?.price}</p> */}
                  {/* {console.log("imageId is :" + itemCard.card?.info?.imageId)} */}
                </div>
              ))}
              //{" "}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
