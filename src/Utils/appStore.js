import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer : {
        cart : cartReducer,
    },
});

export default appStore;


/* This appStore added with reducer and Each slice we assign a reducer
*/