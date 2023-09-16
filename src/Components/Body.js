import React, { useState, useEffect } from "react";
import Quote from "./Quote";
import { GET_RESTAURANTS_LIST } from "../Utils/Constants";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { filterData } from "../Utils/Helper";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [searchText, setSearchText] = useState("");
  const [AllRestaurant, setAllRestaurant] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  console.log("All" + AllRestaurant);
  console.log("filtered" + FilteredRestaurant);

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    try {
      console.log("useeffect called");
      console.log(GET_RESTAURANTS_LIST);
      const response = await fetch(GET_RESTAURANTS_LIST);
      const responseJson = await response.json();
      console.log(responseJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setAllRestaurant(
        responseJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        responseJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      console.log("error");
    }
  };

  const searchData = (searchText, restaurants) => () => {
    console.log("searchdata called" + searchText);
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurant(data);

      if (data.length === 0) {
        console.log("no data");
      }
    } else {
      console.log("else called with no searchtext");
      setFilteredRestaurant(restaurants);
    }
  };

  if (!AllRestaurant) return null;

  return AllRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" bg-sky-900  rounded-md space-x-4">
      <div className="flex justify-around sm:justify-center items-center w-full sm:w-2/4 ">
        <input
          type="text"
          className="rounded-md p-2 m-2 placeholder:italic placeholder:text-slate-400 bg-white focus:outline-none focus:border-white focus:ring-green-600 focus:ring-2 w-3/4 sm:w-40 md:w-60 lg:w-80"
          placeholder="Search for restaurants and food"
          value={searchText}
          name="search"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="max-sm::-m-2 p-2 m-2 text-white rounded-md text-xs lg:text-lg md:text-md border-2 hover:border-sky-300"
          onClick={searchData(searchText, AllRestaurant)}
        >
           <h1 className=" text-orange-600 font-bold text-sm text-center">
            Search
          </h1>
        </button>
        <button
          className="max-sm::-m-2 p-2 m-2 text-white rounded-md text-xs lg:text-lg md:text-md border-2 hover:border-sky-300"
          onClick={() => {
            const filteredTopRatedRestro = AllRestaurant.filter((res) => {
              return res?.info?.avgRating>= 4;
            });
            setFilteredRestaurant(filteredTopRatedRestro);
          }}
        >
          <h1 className=" text-orange-600 font-bold text-sm text-center">
            Top Rated Restaurant
          </h1>
        </button>
      </div>

    
      {/*Display Food Cards */}

      <div className="flex  flex-wrap justify-center">
        {console.log(FilteredRestaurant)}
        {FilteredRestaurant.map((restaurant) => {
          return (
            <Link to={"/restaurants/" + restaurant?.info?.id} key={restaurant?.info?.id}>
           <div >
              <RestaurantCards {...restaurant?.info} />
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
