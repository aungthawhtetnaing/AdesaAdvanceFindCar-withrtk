
import { Button, Checkbox, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CheckBox } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
// import { fuelCars } from '../redux/components/fueslCarsSlice';
import { dataCars } from '../redux/components/listCarsSlice';
import { styled } from '@mui/material/styles';
import { fuelCars } from '../redux/components/fueslCarsSlice';
import Paper from '@mui/material/Paper';

const FuelTypes = () => {
    const [expanded, setExpanded] = useState('panel1');
    const [selectedValues, setSelectedValues] = useState([]);

    



    const dispatch = useDispatch();
    const fuels = useSelector((state)=>state.fuel)
    const fuel= fuels.fuels.data
    // const fuelCa = checkboxes.map(item => item.name);
    // const fuel = fuelCa
    console.log('Fuel***********',selectedValues);
    
    useEffect(()=>{
      dispatch(fuelCars())
    },[])

   
    //lll
    useEffect(()=>{
      dispatch(dataCars({fuelTypes:selectedValues}))
    },[selectedValues])
    
    // const handleChange1 = (name) => {
    //   dispatch(fuelCars(name))
    //   console.log('Fuels Car ###############',name);
    // }

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const handleCheckboxChange = useCallback((event) => {
      
      const { value } = event.target;
      setSelectedValues((prevState) =>
        prevState.includes(value)
          ? prevState.filter((val) => val !== value)
          : [...prevState, value]
      );
    },[selectedValues])
  return (
    <div>
         <Grid item  sx={{width:120,width:1115,marginLeft:30,marginTop:"15px"}} >

    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:"bold",fontSize:18 }}>
               Fuel type
            </Typography>
           
        </AccordionSummary>
        
        <AccordionDetails >
            
        <Typography>
          <FormControl sx={{display:"block"}}  noValidate >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {fuel?.map((fue) => (
                    
                    <Grid item xs={4} key={fue.id}>
                      <FormControlLabel
                        control={
                          <Checkbox
                           
                            // checked={selectedValues.includes(damage.id)}
                            onChange={handleCheckboxChange}
                            value={fue.name}
                          />
                        }
                        label={fue.name}
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

export default  React.memo(FuelTypes)