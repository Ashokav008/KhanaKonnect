import { useState, useEffect } from "react";

const useAllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  async function getAllRestaurants() {
    const data = await fetch(SWIGGY_RESTAURANT_DATA_API_URL);
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    //API Call
    getAllRestaurants();
  }, []);

  return allRestaurants;
};

export default useAllRestaurants;
