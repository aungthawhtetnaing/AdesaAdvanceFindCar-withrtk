import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import AuctionSource from '../FindCars/AuctionSource';
import FuelTypes from '../FindCars/FuelTypes';
import MakeAndModels from '../FindCars/MakeAndModels';
import Transmission from '../FindCars/Transmission';
import SearchIcon from '@mui/icons-material/Search';
import { FitScreenOutlined, Power } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { dataCars, listCars } from '../redux/components/listCarsSlice';
import BodyType from '../FindCars/BodyType';
import Equipment from '../FindCars/Equipment';
import Colour from '../FindCars/Colour';
import OriginCountry from '../FindCars/OriginCountry';
import Seller from '../FindCars/Seller';
import Damage from '../FindCars/Damage';
import EmissionStandard from '../FindCars/EmissionStandard';
import AuctionType from '../FindCars/AuctionType';
import XTime from '../FindCars/XTime';
import VatRegime from '../FindCars/VatRegime';
import Mileage from '../FindCars/Mileage';
import PowerCars from '../FindCars/PowerCars';
import CO2emission from '../FindCars/CO2emission';
import FirstRegistration from '../FindCars/FirstRegistration';
import CurrentPrice from '../FindCars/CurrentPrice';
import EngineSize from '../FindCars/EngineSize';
import { Link, Outlet } from 'react-router-dom';

const FindCars = () => {
  const list = useSelector((state) => state.list);
  // console.log('Selected Data ///////////', list);
  const data = list.lists.data;
  // console.log('Data Data ///////////', data);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClearLocalStorage = () => {
    sessionStorage.removeItem('cachedData')
  };

  return (
    <div>
      <Grid container sx={{ marginTop: 18 }}>
        <Grid item xs={6} sx={{ placeItems: 'center', marginLeft: 30 }}>
          <Typography variant="h4">Advance Search</Typography>
        </Grid>

        <Grid item xs={4}>
          <Button
            onClick={handleClearLocalStorage}
            sx={{ background: 'white', color: '#008C95', marginLeft: '160px' }}
            variant="outlined"
          >
            RESET ALL FILTERS
          </Button>
        </Grid>

        <AuctionSource />
        <MakeAndModels />
        <FuelTypes />
        <Transmission />
        <Mileage />
        <FirstRegistration />
        <EngineSize />
        <PowerCars />
        <BodyType />
        <CurrentPrice />
        <Equipment />
        <Colour />
        <OriginCountry />
        <Seller />
        <Damage />
        <EmissionStandard />
        <CO2emission />
        <AuctionType />
        <XTime />
        <VatRegime />
        {showButton && (
          <Typography sx={{ position: 'fixed', marginLeft: '1090px', marginTop: '490px' }}>
            <Link to="/findcar" style={{ textDecoration: 'none', color: 'black' }}>
            <Button onClick={() => sessionStorage.clear('activeTab')} sx={{marginLeft:"15px",background:'#008C95',width:"250px",height:"50px"}} variant='contained' endIcon={<SearchIcon/>} >
                  SHOW {list.lists.total} VEHICLES
            </Button>
            </Link>
        </Typography>
                )}
      </Grid>
    <Outlet />
</div>
);};
                
 export default FindCars;
