import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    auctions:[], 
}

export const auctionCars = createAsyncThunk('auction/auctionCars',async()=>{
   return axios
   .get('http://192.168.100.12:8080/api/auction_types')
   .then((response)=>response.data.data) 
})

const auctionCarsSlice= createSlice({
    name:'auction',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(auctionCars.fulfilled,(state,action)=>{
            state.auctions=action.payload  
        })
    }
})

export default auctionCarsSlice.reducer
