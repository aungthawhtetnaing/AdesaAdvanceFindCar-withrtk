import { configureStore } from "@reduxjs/toolkit";
import carslistReducer from "./components/listCarsSlice"
import brandCarsReducer from "./components/brandsSlice"
import modelCarsReducer from "./components/modelSlice"
import findCarsReducer from "./components/findCarsSlice";
import fuelCarsReducer from "./components/fueslCarsSlice";
import powerReducer from "./components/powerCarsSlice"
import pdCarsReducer from "./components/powerDetailSlice"
import damageCarsReducer from "./components/damageCarsSlice"
import auctionCarsReducer from "./components/AuctionCarsSlice"
import sellerCarsReducer from "./components/sellerCarsSlice"
import engineSizeReducer from "./components/engineSizeSlice"
import detailistsReducer from "./components/detailCarsListsSlice"
const store = configureStore({
    reducer:{
        list:carslistReducer,
        brands:brandCarsReducer,
        models:modelCarsReducer,
        find:findCarsReducer,
        fuel:fuelCarsReducer,
        power:powerReducer,
        pDetail:pdCarsReducer,
        damage:damageCarsReducer,
        auction:auctionCarsReducer,
        seller:sellerCarsReducer,
        engine:engineSizeReducer,
        detailLists:detailistsReducer
    }
})

export default store