import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    brands:[], 
    loading:false,
    error:''
}

export const brandCars = createAsyncThunk('brand/brandCars',async()=>{
   return axios
   .get('http://192.168.100.12:8080/api/carmakes')
   .then((response)=>response.data.data) 
})

const brandCarsSlice= createSlice({
    name:'brand',
    initialState,
    extraReducers:{
        [brandCars.pending]:(state)=>{
          state.loading = true;
          state.error = '';
        },
        [brandCars.fulfilled]:(state,action)=>{
          state.loading = false;
          state.brands = action.payload;
        },
        [brandCars.rejected]:(state,action)=>{
          state.loading = false;
          state.error = action.error.message;
        },
      }
})

export default brandCarsSlice.reducer
