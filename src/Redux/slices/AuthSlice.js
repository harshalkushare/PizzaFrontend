import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../helper/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || 'false',
  role: localStorage.getItem('role') || ' ',
  data: JSON.parse(localStorage.getItem('data'))||{},
};

export const createAccount = createAsyncThunk('/auth/createAccount',async (data)=>{
  console.log('data coming into thunk',data);
  try {
       const response = axiosInstance.post('/users',data)
       toast.promise(response,{
        success:(resolvedPromise) => {
          return resolvedPromise?.data?.message;
        },
        loading:"We are registering your id",
        error:"Ohh something went wrong",
       })
       const apiResponse = await response
       return apiResponse;
  } catch (error) {
    console.log(error);
  }
  
});

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
      
    },
})

export default AuthSlice.reducer;