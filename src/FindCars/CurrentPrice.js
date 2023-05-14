
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Grid, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dataCars } from '../redux/components/listCarsSlice';
import { useDispatch } from 'react-redux';
const options = [
  'Any',
  '1,000',
  '2,000',
  '3,000',
  '4,000',
  '5,000',
  '6,000',
  '7,000',
  '8,000',
  '9,000',
  '10,000',
  '11,000',
  '12,000',
  '13,000',
  '14,000',
  '15,000',
  '16,000',
  '17,000',
  '18,000',
  '19,000',
  '20,000',
  '25,000',
  '30,000',
  '35,000',
  '40,000',
  '45,000',
  '50,000'
];

const CurrentPrice = () => {

  const [fromValue, setFromValue] = useState('Any');
  const [toValue, setToValue] = useState('Any');

  const handleFromChange = (event, newValue) => {
    setFromValue(newValue);
    
  };

  const handleToChange = (event, newValue) => {
    setToValue(newValue);

  };

  

  
  
  // Get the index of the selected value in the options array
  const fromIndex = options.indexOf(fromValue);
  const toIndex = options.indexOf(toValue);

  // If the "to" value is selected, limit the options of the "from" Autocomplete
  const fromOptions = toValue === 'Any' ? options : options.slice(0, toIndex);

  // If the "from" value is selected, limit the options of the "to" Autocomplete
  const toOptions = fromValue === 'Any' ? options : options.slice(fromIndex + 1);
  const price =[fromValue.replace(/\,/g,''),toValue.replace(/\,/g,'')]
  console.log("mile??????",price);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(dataCars({price:price}))
  },[fromValue,toValue])

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
          Current price
        </Typography>
        
    </AccordionSummary>
    
    <AccordionDetails >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={1.2}>
                <Autocomplete
                  options={fromOptions}
                  value={fromValue}
                  onChange={handleFromChange}
                  disableClearable
                  sx={{ width: 105, marginLeft: '15px' }}
                  size="small"
                  renderInput={(params) => <TextField {...params} label="From" />}
                />
              </Grid>
              <Grid item xs={1}>
                <Autocomplete
                  options={toOptions}
                  value={toValue}
                  onChange={handleToChange}
                  disableClearable
                  sx={{ width: 105, marginLeft: '15px' }}
                  size="small"
                  renderInput={(params) => <TextField {...params} label="To" />}
                />
              </Grid>
            </Grid>
            </AccordionDetails>
</Accordion>
</Grid>
    </div>
  );
};

export default  React.memo(CurrentPrice)
