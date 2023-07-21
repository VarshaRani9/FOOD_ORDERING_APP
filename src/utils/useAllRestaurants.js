// filterd Data causes problem - body line 61

import { useEffect, useState } from "react";
import { FETCH_RESTRO_URL } from "../components/config";

const useAllRestaurants = () => {
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTRO_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return [AllRestaurants, filteredRestaurants];
};
export default useAllRestaurants;
