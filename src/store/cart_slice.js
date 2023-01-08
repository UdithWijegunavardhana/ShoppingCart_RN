import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState:{
        itemList:[],
        quantity:0,
        totalQuantity:0,
    },
    reducers:{
        addToCart(state,action){
            const newItem = action.payload;
            const existingItems = state.itemList.find((item)=> item.id === newItem.id);
            if(existingItems){
                existingItems.quantity++;
                existingItems.price+=newItem.price;
            }else{
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    productName: newItem.productName
                });
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action){
            const id = action.payload;
            const existingItems = state.itemList.find(item => item.id === id);
            
            if (existingItems.quantity === 1){
                state.itemList = state.itemList.filter(item => item.id !== id);
                state.totalQuantity--;
            }else{
                existingItems.quantity--;
                existingItems.totalPrice-= existingItems.price;
            }
        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;