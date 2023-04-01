export  function filterData(searchText, restaurants) {
  let data = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  // console.log("Getting all the Filtered Restaurants for the curent query");
  return data;
}
