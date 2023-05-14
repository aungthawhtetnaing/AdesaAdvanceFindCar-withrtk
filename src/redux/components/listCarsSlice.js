

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 

export const dataCars=createAsyncThunk('data/dataCars',async({make,model,category,fuelTypes,transmission,type,mile,power,CO2,damage,colour,equipment,emission,auction,countary,seller,xtime,vat,registration,price,enginesize})=>{
  // console.log('fuelType????????',fuelTypes);
  // console.log('transmission????????',transmission);
  // console.log('Body_type????????',type);


  
  const cachedData = sessionStorage.getItem('cachedData');
  if (cachedData) {
    const cachedDataObj = JSON.parse(cachedData);
    if (make === undefined) make = cachedDataObj.make;
    if (model === undefined) model = cachedDataObj.model;
    if (category === undefined) category = cachedDataObj.category;
    if (fuelTypes === undefined) fuelTypes = cachedDataObj.fuelTypes;
    if (transmission === undefined) transmission = cachedDataObj.transmission;
    if (type === undefined) type = cachedDataObj.type;
    if (mile === undefined) mile = cachedDataObj.mile;
    if (power === undefined) power = cachedDataObj.power;
    if (CO2 === undefined) CO2 = cachedDataObj.CO2;
    if (damage === undefined) damage = cachedDataObj.damage;
    if (colour === undefined) colour = cachedDataObj.colour;
    if (equipment === undefined) equipment = cachedDataObj.equipment;
    if (emission === undefined) emission = cachedDataObj.emission;
    if (auction === undefined) auction = cachedDataObj.auction;
    if (countary === undefined) countary = cachedDataObj.countary;
    if (seller === undefined) seller = cachedDataObj.seller;
    if (xtime === undefined) xtime = cachedDataObj.xtime;
    if (vat === undefined) vat = cachedDataObj.vat;
    if (registration === undefined) registration = cachedDataObj.registration;
    if (price === undefined) price = cachedDataObj.price;
    if (enginesize === undefined) enginesize = cachedDataObj.enginesize;
  }
  
  
  console.log(`http://192.168.100.12:8080/api/cars?
  make=${make !== undefined ? make : ''}
  &model=${model !== undefined ? model : ''}
  &fuel_type=${fuelTypes !== undefined ? fuelTypes : ''}
  &auction_source=${category !== undefined ? category : 'All Sources'} 
  &transmission=${transmission !== undefined ? transmission : ''}
  &body_type=${type !== undefined ? type : ''}
  &mileage=${mile !== undefined ? mile : ''}
  &power=${power !== undefined ? power : ''}
  &co2=${CO2 !== undefined ? CO2 : ''}
  &damage=${damage !== undefined ? damage : ''}
  &colour=${colour !== undefined ? colour : ''}
  &equipment=${equipment !== undefined ? equipment : ''}
  &emission_standard=${emission !== undefined ? emission : ''}
  &auction_type=${auction !== undefined ? auction : ''}
  &country=${countary !== undefined ? countary : ''}
  &seller=${seller !== undefined ? seller : ''}
  &x_time=${xtime !== undefined ? xtime : ''}
  &vat_regime=${vat !== undefined ? vat : ''}
  &registration=${registration !== undefined ? registration : ''}
  &price=${price !== undefined ? price : ''}
  &engine_size=${enginesize !== undefined ? enginesize : ''}
  `);
  
  return axios
  .get(`http://192.168.100.12:8080/api/cars?
  make=${make !== undefined ? make : ''}
  &model=${model !== undefined ? model : ''}
  &fuel_type=${fuelTypes !== undefined ? fuelTypes : ''}
  &auction_source=${category !== undefined ? category : 'All Sources'} 
  &transmission=${transmission !== undefined ? transmission : ''}
  &body_type=${type !== undefined ? type : ''}
  &mileage=${mile !== undefined ? mile : ''}
  &power=${power !== undefined ? power : ''}
  &co2=${CO2 !== undefined ? CO2 : ''}
  &damage=${damage !== undefined ? damage : ''}
  &colour=${colour !== undefined ? colour : ''}
  &equipment=${equipment !== undefined ? equipment : ''}
  &emission_standard=${emission !== undefined ? emission : ''}
  &auction_type=${auction !== undefined ? auction : ''}
  &country=${countary !== undefined ? countary : ''}
  &seller=${seller !== undefined ? seller : ''}
  &x_time=${xtime !== undefined ? xtime : ''}
  &vat_regime=${vat !== undefined ? vat : ''}
  &registration=${registration !== undefined ? registration : ''}
  &price=${price !== undefined ? price : ''}
  &engine_size=${enginesize !== undefined ? enginesize : ''}
  `)
  .then((res)=>{
    sessionStorage.setItem('cachedData', JSON.stringify({ make, model, category, fuelTypes, transmission, type,mile ,power,CO2,damage,colour,equipment,emission,auction,countary,seller,xtime,vat,registration,price,enginesize}));
    return res.data;
  });
})

const carslistSlice = createSlice({
  name:'data',
  initialState:{
    lists:[],
    loading:false,
    error:''
  },
  reducers: {
    clearError: (state) => {
      state.error = '';
    },
  },
  extraReducers:{
    [dataCars.pending]:(state)=>{
      state.loading = true;
      state.error = '';
    },
    [dataCars.fulfilled]:(state,action)=>{
      state.loading = false;
      state.lists = action.payload;
    },
    [dataCars.rejected]:(state,action)=>{
      state.loading = false;
      state.error = action.error.message;
    },
  }
});


window.addEventListener('beforeunload', () => {
  sessionStorage.clear();
});

export default carslistSlice.reducer;




