import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    engine:[], 
    loading:false,
    error:''
}

export const engineCars = createAsyncThunk('engines/engineCars',async()=>{
   return axios
   .get('http://192.168.100.12:8080/api/engine-sizes')
   .then((response)=>response.data.data) 
})

const engineCarSlice= createSlice({
    name:'engines',
    initialState,
    extraReducers:{
        [engineCars.pending]:(state)=>{
          state.loading = true;
          state.error = '';
        },
        [engineCars.fulfilled]:(state,action)=>{
          state.loading = false;
          state.engine = action.payload;
        },
        [engineCars.rejected]:(state,action)=>{
          state.loading = false;
          state.error = action.error.message;
        },
      }
})

export default engineCarSlice.reducer
