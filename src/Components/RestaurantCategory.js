import React, { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({data}) => {
  const {title,itemCards} = data?.card?.card;
  const [showItem, setShowItem] = useState(false);
  
  console.log("into categories");

    console.log("itemCards"+itemCards);
    if (!itemCards) {
      return null;
    }

  return (
    <div>
      <div className=' bg-slate-100  shadow-lg rounded-md p-2 m-2 flex justify-between cursor-pointer'
      onClick={() => setShowItem(!showItem)}>
           <span className="font-bold text-md">
            {title} ({itemCards?.length})
          </span>
          <span>{showItem ? "⬆️" : "⬇️"}</span>
         </div>
         {showItem && <ItemList  itemCards={itemCards} />}
        </div>
  )
}

export default RestaurantCategory