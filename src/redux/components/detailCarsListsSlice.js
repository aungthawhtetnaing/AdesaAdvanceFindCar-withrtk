import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    detailCarsList:[], 
    loading:false,
    error:''
}

export const detailCarListss = createAsyncThunk('detailCarListss/powerDetail',async(id)=>{
    console.log('detail id ..............',id);
   return axios
   .get('http://192.168.100.12:8080/api/cars/'+id)
   .then((response)=>response.data.data) 
})

const detailListsSlice= createSlice({
    name:'detailCarsList',
    initialState,
    extraReducers:{
        [detailCarListss.pending]:(state)=>{
          state.loading = true;
          state.error = '';
        },
        [detailCarListss.fulfilled]:(state,action)=>{
          state.loading = false;
          state.detailCarsList = action.payload;
        },
        [detailCarListss.rejected]:(state,action)=>{
          state.loading = false;
          state.error = action.error.message;
        },
      }
})

export default detailListsSlice.reducer
