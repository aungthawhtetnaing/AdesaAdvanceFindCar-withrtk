import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    powerDt:[], 
    loading:false,
    error:''
}

export const powerDetail = createAsyncThunk('pDetail/powerDetail',async(id)=>{
    console.log('detail id ..............',id);
   return axios
   .get('http://192.168.100.12:8080/api/powers/'+id)
   .then((response)=>response.data.data) 
})

const pdCarsSlice= createSlice({
    name:'pDetail',
    initialState,
    extraReducers:{
        [powerDetail.pending]:(state)=>{
          state.loading = true;
          state.error = '';
        },
        [powerDetail.fulfilled]:(state,action)=>{
          state.loading = false;
          state.powerDt = action.payload;
        },
        [powerDetail.rejected]:(state,action)=>{
          state.loading = false;
          state.error = action.error.message;
        },
      }
})

export default pdCarsSlice.reducer
