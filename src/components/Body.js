import { FETCH_RESTRO_URL } from "./config.js";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  console.log("render");


  async function getRestaurants() {
    const url = await fetch(FETCH_RESTRO_URL);
    const json = await url.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // async function getRestaurants() {
  //   // const data = await fetch(FETCH_RESTRO_URL);
  //   // const json = await data.json();
  //   // console.log(json);
  //   // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  //   // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  //   setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
  //   setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
  // }

  const isOnline = useOnline();
  if(!isOnline){
    return <h1>Offline, Please check your internet Connection</h1>
  }
  if (!AllRestaurants) return null;

  return AllRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container pl-5 p-1 my-3 bg-gray-200">
        <input data-testid="search-ip"
          type="text" 
          className="focus:ring-2 ring-pink-300"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button data-testid="search"
          className="p-2 m-2 bg-green-300 hover:bg-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, AllRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id} className="link"
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;