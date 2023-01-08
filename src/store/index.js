import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth_slice";
import cartSlice from "./cart_slice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store;