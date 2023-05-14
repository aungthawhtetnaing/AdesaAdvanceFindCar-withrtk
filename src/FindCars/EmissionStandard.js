import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControl, FormControlLabel, Grid } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { dataCars } from '../redux/components/listCarsSlice';

const EmissionStandard = () => {
    const [selectedValues, setSelectedValues] = useState([]);

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(dataCars({emission:selectedValues}))
    },[selectedValues])
    console.log('EmissionStandard***********',selectedValues);
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
          Emission standard
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormControl sx={{display:"block"}}  noValidate >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('EU1')}
                                onChange={handleCheckboxChange}
                                value="EU1"
                              />
                            }
                            label="EU1"
                          />
            
          </Grid>
          <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('EU2')}
                                onChange={handleCheckboxChange}
                                value="EU2"
                              />
                            }
                            label="EU2"
                          />
            
          </Grid>
          <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('EU3')}
                                onChange={handleCheckboxChange}
                                value="EU3"
                              />
                            }
                            label="EU3"
                          />
            
          </Grid>
          <Grid item xs={4}>
            
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('EU4')}
                                onChange={handleCheckboxChange}
                                value="EU4"
                              />
                            }
                            label="EU4"
                          />
            
          </Grid>
           <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('EU5')}
                                onChange={handleCheckboxChange}
                                value="EU5"
                              />
                            }
                            label="EU5"
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

export default React.memo(EmissionStandard)