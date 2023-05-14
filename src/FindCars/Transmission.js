
import { Button, Checkbox, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CheckBox } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { dataCars, tranCars } from '../redux/components/listCarsSlice';

const Transmission = () => {
    const [expanded, setExpanded] = useState('panel1');
    const [selectedValues, setSelectedValues] = useState([]);

    console.log('Tramsimmation***********',selectedValues);
    const dispatch = useDispatch()
    //lll
    useEffect(()=>{
      dispatch(dataCars({transmission:selectedValues}))
    },[selectedValues])
    
    const handleCheckboxChange = (event) => {
      const { value } = event.target;
      setSelectedValues((prevState) =>
        prevState.includes(value)
          ? prevState.filter((val) => val !== value)
          : [...prevState, value]
      );
    };

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
               Transmission
            </Typography>
           
        </AccordionSummary>
        
        <AccordionDetails >
            
        <Typography>
        <FormControl sx={{display:"block"}}  noValidate >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('Automatic')}
                                onChange={handleCheckboxChange}
                                value="Automatic"
                              />
                            }
                            label="Automatic"
                          />
            
          </Grid>
          <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('Manual')}
                                onChange={handleCheckboxChange}
                                value="Manual"
                              />
                            }
                            label="Manual"
                          />
            
          </Grid>
          </Grid>
          </FormControl>
          
        </Typography>
        </AccordionDetails>
</Accordion>
</Grid>
    </div>
  )
}

export default React.memo(Transmission)