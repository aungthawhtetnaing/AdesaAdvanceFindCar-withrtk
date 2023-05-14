import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControl, FormControlLabel, Grid } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { damageCars } from '../redux/components/damageCarsSlice';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { dataCars } from '../redux/components/listCarsSlice';
import { auctionCars } from '../redux/components/AuctionCarsSlice';
const AuctionType = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  
    

    const auctions=useSelector(state=>state.auction)
    const aCars =auctions.auctions
    console.log("auctions Car ??????",aCars);
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(auctionCars())
    },[])

    useEffect(()=>{
      dispatch(dataCars({auction:selectedValues}))
    },[selectedValues])

    console.log('Auction***********',selectedValues);
    const handleCheckboxChange = (event) => {
      
      const { value } = event.target;
      setSelectedValues((prevState) =>
        prevState.includes(value)
          ? prevState.filter((val) => val !== value)
          : [...prevState, value]
      );
    };
  return (
    <div>
        <Grid item  sx={{width:120,width:1115,marginLeft:30,marginTop:"15px"}} >
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:"bold",fontSize:18 }}>
          Auction type
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormControl sx={{display:"block"}}  noValidate >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  {aCars.map((auction) => (
                    
                      <Grid item xs={4} key={auction.id}>
                        <FormControlLabel
                          control={
                            <Checkbox
                             
                              // checked={selectedValues.includes(damage.id)}
                              onChange={handleCheckboxChange}
                              value={auction.id}
                            />
                          }
                          label={auction.name}
                        />
                      </Grid>
         
          ))}
        </Grid>
           
          </FormControl>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
    </div>
  )
}

export default  React.memo(AuctionType)