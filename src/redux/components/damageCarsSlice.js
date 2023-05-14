import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    damage:[], 
    loading:false,
    error:''
}

export const damageCars = createAsyncThunk('damage/damageCars',async()=>{
   return axios
   .get('http://192.168.100.12:8080/api/damages')
   .then((response)=>response.data.data) 
})

const damageCarsSlice= createSlice({
    name:'damage',
    initialState,
    extraReducers:{
        [damageCars.pending]:(state)=>{
          state.loading = true;
          state.error = '';
        },
        [damageCars.fulfilled]:(state,action)=>{
          state.loading = false;
          state.damage = action.payload;
        },
        [damageCars.rejected]:(state,action)=>{
          state.loading = false;
          state.error = action.error.message;
        },
      }
})

export default damageCarsSlice.reducer
