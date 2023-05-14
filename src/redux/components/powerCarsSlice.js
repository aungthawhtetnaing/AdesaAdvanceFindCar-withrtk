import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    power:[], 
    loading:false,
    error:''
}

export const powerCars = createAsyncThunk('power/powerCars',async()=>{
   return axios
   .get('http://192.168.100.12:8080/api/powers')
   .then((response)=>response.data.data) 
})

const powerSlice= createSlice({
    name:'power',
    initialState,
    extraReducers:{
        [powerCars.pending]:(state)=>{
          state.loading = true;
          state.error = '';
        },
        [powerCars.fulfilled]:(state,action)=>{
          state.loading = false;
          state.power = action.payload;
        },
        [powerCars.rejected]:(state,action)=>{
          state.loading = false;
          state.error = action.error.message;
        },
      }
})

export default powerSlice.reducer
