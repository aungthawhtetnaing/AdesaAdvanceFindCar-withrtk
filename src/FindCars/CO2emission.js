

import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { dataCars } from '../redux/components/listCarsSlice';

const StyledTextField = styled(TextField)({
  '& input[type=number]': {
    '-moz-appearance': 'textfield',
  },
  '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
});

const CO2emission = () => {
  const [co2Value, setCo2Value] = useState('Any');
  const [kmValue, setKmValue] = useState('Any');

  const CO2 =[co2Value!== '' ? co2Value : 'Any',kmValue!== '' ? kmValue : 'Any']
  console.log('CO2 Emission ?????????',CO2);

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(dataCars({CO2:CO2}))
  },[co2Value,kmValue])

  const handleCo2Change = (e) => {
    const value = e.target.value;
    if (value.length <= 3) {
      setCo2Value(value);
    }
  };

  const handleKmChange = (e) => {
    const value = e.target.value;
    if (value.length <= 3) {
      setKmValue(value);
    }
  };

  return (
    <div>
      <Grid item sx={{ width: 120, width: 1115, marginLeft: 30, marginTop: '15px' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: 18 }}>
              CO2 emission
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Grid container rowSpacing={1} sx={{alignItems:"center"}}>
                <Grid>
                  <Typography sx={{ fontSize: 16,fontWeight:"bold" }}>g/km</Typography>
                </Grid>
                <Grid>
                  <StyledTextField
                    type="number"
                    variant="outlined"
                    sx={{width:60 }} 
                    value={co2Value}
                    onChange={handleCo2Change}
                  />
                </Grid>
                <Grid >
                  <Typography>-</Typography>
                </Grid>
                <Grid>
                  <StyledTextField
                    type="number"
                    variant="outlined"
                    sx={{width:60 }} 
                    value={kmValue}
                    onChange={handleKmChange}
                  />
                </Grid>
              </Grid>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
};

export default  React.memo(CO2emission)
