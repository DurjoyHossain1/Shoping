import { configureStore } from "@reduxjs/toolkit";
import { CreateSlice } from "./slices/CartSlice";

export const Store = configureStore({
    reducer: {
        cart: CreateSlice
    },
   
})