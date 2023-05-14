
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Grid, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dataCars } from '../redux/components/listCarsSlice';
import { useDispatch } from 'react-redux';
const options = [
  'Any',
  '2023',
  '2022',
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
  '2014',
];

const FirstRegistration = () => {
const [expanded, setExpanded] = useState('panel1');
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
  const toOptions = fromValue == 'Any' ? options : options.slice(fromIndex + 1);

  const registration =[toValue,fromValue]
  console.log("mile??????",registration);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(dataCars({registration:registration}))
  },[toValue,fromValue])

  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
            First registration
        </Typography>
        
    </AccordionSummary>
    
    <AccordionDetails >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={1.2}>
                <Autocomplete
                  options={toOptions}
                  value={toValue}
                  onChange={handleToChange}
                  disableClearable
                  sx={{ width: 105, marginLeft: '15px' }}
                  size="small"
                  renderInput={(params) => <TextField {...params} label="From" />}
                />
              </Grid>
              <Grid item xs={1}>
                <Autocomplete
                  options={fromOptions}
                  value={fromValue}
                  onChange={handleFromChange}
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

export default React.memo(FirstRegistration)
