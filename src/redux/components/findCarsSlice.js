import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    modelCar:[], 
}

export const findCars = createAsyncThunk('find/findCars',async(id)=>{
    console.log('detail id ..............',id);
   return axios
   .get('http://192.168.100.12:8080/api/carmakes/'+id)
   .then((response)=>response.data.data) 
})

const findcarsSlice= createSlice({
    name:'find',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(findCars.fulfilled,(state,action)=>{
            state.modelCar=action.payload.models
        })
    }
})

export default findcarsSlice.reducer
