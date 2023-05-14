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
import { sellerCars } from '../redux/components/sellerCarsSlice';
const Seller = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  
    

    const seller=useSelector(state=>state.seller)
    const sCars =seller.sellers
    console.log("Seller Car ??????",sCars);
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(sellerCars())
     
    },[])

    useEffect(()=>{
      dispatch(dataCars({seller:selectedValues}))
    },[selectedValues])

    console.log('seller***********',selectedValues);
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
          Seller
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormControl sx={{display:"block"}}  noValidate >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  {sCars.map((seller) => (
                    
                      <Grid item xs={4} key={seller.id}>
                        <FormControlLabel
                          control={
                            <Checkbox
                             
                              // checked={selectedValues.includes(damage.id)}
                              onChange={handleCheckboxChange}
                              value={seller.name}
                            />
                          }
                          label={seller.name}
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

export default  React.memo(Seller)