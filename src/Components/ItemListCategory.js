import React, { useState } from 'react';
import { IMG_CDN_URL ,IMG_ISVEG,IMG_ISNONVEG} from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/cartSlice';

const ItemListCategory = ({itemCategory}) => {
  console.log("final"+itemCategory);
const {id,name,imageId,description,price,defaultPrice,isVeg} = itemCategory.card.info;
const dispatch = useDispatch();

const handleAddItems = () => {
    //Dispatch an action
    dispatch(addItem(itemCategory.card.info));
};

  return (
    <div key={id} className=' bg-slate-50 rounded-sm p-1 m-1 flex justify-between '>
        <div className="w-6/12">
            {isVeg === 1 ?
            (
              <img
                width="20"
                height="20"
                src={IMG_ISVEG}
                alt="vegetarian"
              />
            ) : (
              <img
                width="20"
                height="20"
                src={IMG_ISNONVEG}
                alt="non vegetarian"
              />
            )
        }
            <h1 className="text-sm my-1">{name} </h1> 
            <p className="text-sm"> ₹ {price ? price/100 : defaultPrice/100 }</p>
            <p className="text-xs font-xs text-gray-500 ">{description}</p>
        </div>
         {/* Restaurant Category Item Card Image and "ADD" button */}
         <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-20 my-2 rounded-lg bg-rose-700 text-xs text-white shadow-lg shadow-white"
                onClick = {handleAddItems}
              >
                Add +
              </button>
            </div>
            <img src={IMG_CDN_URL+imageId} className="w-full rounded-lg" />
          </div>

        
    
    </div>
  )
}

export default ItemListCategory;