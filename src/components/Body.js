import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useAllRestaurants from "../utils/useAllRestaurants";
import { SWIGGY_RESTAURANT_DATA_API_URL } from "../config";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // const data = useAllRestaurants();
  // setAllRestaurants(data);
  async function getAllRestaurants() {
    const data = await fetch(SWIGGY_RESTAURANT_DATA_API_URL);
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
  }

  //this useEffect will only gets called when page rendres only one time(Empty dependency array).
  useEffect(() => {
    //API Call
    getAllRestaurants();
  }, []);

  // Early return
  if (!filteredRestaurants) return <h2>No Restaurant matches your Filter</h2>;

  //if restauras is empty then load a shimmer UI
  // if therere is api data then load the data.
  // console.log(allRestaurants);
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            if (e.target.value == "") setFilteredRestaurants(allRestaurants);
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            let filteredData = filterData(searchText, allRestaurants);

            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>No search matches your filter</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            // console.log(restaurant);
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard
                  restaurant={restaurant}
                  key={restaurant.data.id}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
