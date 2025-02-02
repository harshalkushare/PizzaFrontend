import {createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../helper/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    productData : [] //array of products
}

export const getAllProduct = createAsyncThunk('/products/getAll',async ()=>{
    try {
        const products = axiosInstance.get('/products');
        toast.promise(products,{
            loading:"Loading all products",
            error:"Cannot load products",
            success:"All products load successFully"
        })
        const apiResponse = await products;
        return apiResponse;   
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
   
})

const ProductSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:((builder) => {
       builder.addCase(getAllProduct.fulfilled, (state,action) => {
        console.log(action.payload);
        state.productData = action?.payload?.data?.data;
       })
    })
})

export default ProductSlice.reducer
