// import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
// import axios from "axios"

// const initialState = {   
//     models:[], 
// }

// export const modelCars = createAsyncThunk('model/modelCars',async()=>{
//    return axios
//    .get('http://192.168.100.12:8008/api/car-models')
//    .then((response)=>response.data) 
// })

// const modelCarsSlice= createSlice({
//     name:'model',
//     initialState,
//     extraReducers:(builder)=>{
//         builder.addCase(modelCars.fulfilled,(state,action)=>{
//             state.models=action.payload  
//         })
//     }
// })

// export default modelCarsSlice.reducer
