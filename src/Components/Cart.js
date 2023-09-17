import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Utils/Constants";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  //subscribing to the store using useSelector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="w-6/12 m-auto ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <button
            className=" p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 ? (
          <h1> Cart is empty. Add Items to the cart!</h1>
        ) : (
          cartItems.map((cartItem) => (
            <div key={cartItem?.id} className="flex justify-between m-1 p-1 border-b-2">
              <div className=" flex w-1/6 space-x-2 sm:space-x-4 ">
                <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-28 sm:h-28 bg-gray-500" 
                src={IMG_CDN_URL + cartItem.imageId} alt="Image not provided" />
              </div>
              <div className="w-3/6 mx-3 p-0 " >
                  <p className=" font-bold">{cartItem?.name}</p>
                  <p className=" text-xs">{cartItem?.description}</p>

              </div>


              <div className="text-right w-2/6">
                {cartItem?.price ? (
                  <p className="text-lg font-semibold">
                    ₹{cartItem?.price / 100}
                  </p>
                ) : (
                  <p className="text-lg font-semibold">
                    ₹{cartItem?.defaultPrice / 100}
                  </p>
                )}
             
              </div>
            </div>
          ))
        )}
        {/*Checkout portion*/}
        
      </div>
      <div className=" items-end ">
          <button
            className=" p-2 m-2 bg-black text-white rounded-lg"
          >
            Continue to Checkout
          </button>
        </div>
    </>
  );
};

export default Cart;

/*
    <p>
                <button
                  type="button"
                  className="hover:text-red-700 flex items-center px-2 py-1 pl-0 space-x-1"
                  onClick={() =>
                    handleRemoveItem(cartItem?.menuItem?.card?.info?.id)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-red-700"
                  >
                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                  </svg>
                  <span>Remove</span>
                </button>
                </p>
**/
