import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './slices/AuthSlice'
import productSliceReducer from './slices/ProductSlice'

export const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        product:productSliceReducer
    },
    devTools:true
});