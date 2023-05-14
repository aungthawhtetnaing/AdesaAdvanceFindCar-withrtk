import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    sellers:[], 
    loading:false,
    error:''
}

export const sellerCars = createAsyncThunk('seller/sellerCars',async()=>{
   return axios
   .get('http://192.168.100.12:8080/api/sellers')
   .then((response)=>response.data.data) 
})

const sellerCarsSlice= createSlice({
    name:'seller',
    initialState,
    extraReducers:{
        [sellerCars.pending]:(state)=>{
          state.loading = true;
          state.error = '';
        },
        [sellerCars.fulfilled]:(state,action)=>{
          state.loading = false;
          state.sellers = action.payload;
        },
        [sellerCars.rejected]:(state,action)=>{
          state.loading = false;
          state.error = action.error.message;
        },
      }
})

export default sellerCarsSlice.reducer
