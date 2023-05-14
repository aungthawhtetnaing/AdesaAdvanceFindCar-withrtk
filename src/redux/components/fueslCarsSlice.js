import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    fuels:[], 
}

export const fuelCars = createAsyncThunk('fuel/fuelCars',async()=>{
   return axios
   .get('http://192.168.100.12:8080/api/fueltypes')
   .then((response)=>response.data) 
})

const fuelCarsSlice= createSlice({
    name:'fuel',
    initialState,
    extraReducers:{
        [fuelCars.pending]:(state)=>{
          state.loading = true;
          state.error = '';
        },
        [fuelCars.fulfilled]:(state,action)=>{
          state.loading = false;
          state.fuels = action.payload;
        },
        [fuelCars.rejected]:(state,action)=>{
          state.loading = false;
          state.error = action.error.message;
        },
      }
})

export default fuelCarsSlice.reducer
