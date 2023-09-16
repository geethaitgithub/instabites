import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_RESTAURANT_MENU } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { IMG_CDN_URL } from "../Utils/Constants";
import RestaurantCategory from "./RestaurantCategory";
import { Link } from "react-router-dom";
import ShimmerMenu from "./SimmerMenu";

const RestaurantMenu = () => {
  const [menuList, setMenuList] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;
  const { name, cuisines, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;
  //console.log(resInfo?.cards[0]?.card?.card?.info);
  //console.log(resInfo?.cards[2]);

  /*const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("categories");

    console.log(categories);*/

  // New way to fetch categories (testing)
  const categories = resInfo.cards
    ?.filter((y) => y?.groupedCard)
    ?.map((z) => {
      return z?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (a) =>
          a?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  console.log(categories);

  return (
    <div>
      {/*</div><div className="flex bg-black text-white w-full space-x-5 mx-auto rounded-lg">*/}
      <div className=" font-poppins flex gap-5 flex-wrap justify-center bg-[#171a29] text-white  p-5 rounded-lg ">
            
        <span>
          <img
            className="p-2 m-2 h-18"
            src={IMG_CDN_URL + cloudinaryImageId}
          ></img>
        </span>
        <span>
          <h1 className="px-4 sm:text-xl md:text-1xl lg:text-2xl  font-bold"> <span className=" text-white">{name}</span></h1>
          <h1 className="px-4 sm:text-xl md:text-1xl lg:text-2xl  font-bold"> <span className=" text-orange-600">{cuisines}</span></h1>
        </span>
      </div>
      {/*Categories accordions */}

      <div className="w-6/12 justify-center mx-auto">
        
        {categories.length ===0 ? (<h1>sorry</h1>) : (
        categories[0].map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category}
          />
        ))
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
