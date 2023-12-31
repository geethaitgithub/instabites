import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
        name : 'cart',
        initialState : {
            items : [],
        },
        reducers : {
            addItem : (state,action) => {
                //mutating our state over here earlier it was not
                state.items.push(action.payload);
            },
            removeItem: (state,action) => {
                state.items.pop();
            },
            clearCart: (state,action) => {
                state.items.length =0;
            },
        },

});


export const {addItem , removeItem , clearCart} = cartSlice.actions; // actions , slice

export default cartSlice.reducer; // reducer

/*
{
    actions : {
        addItem
    },
    reducer
}
cartSlice have actions and reducer
*/