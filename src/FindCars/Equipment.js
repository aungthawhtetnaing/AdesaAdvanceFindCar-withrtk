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

const Equipment = () => {
    const [selectedValues, setSelectedValues] = useState([]);

    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(dataCars({equipment:selectedValues}))
    },[selectedValues])
    console.log('Equipment***********',selectedValues);
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
          Equipment
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
                                checked={selectedValues.includes('Four wheel drive')}
                                onChange={handleCheckboxChange}
                                value="Four wheel drive"
                              />
                            }
                            label="Four wheel drive"
                          />
            
          </Grid>
          <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('Air conditioning')}
                                onChange={handleCheckboxChange}
                                value="Air conditioning"
                              />
                            }
                            label="Air conditioning"
                          />
            
          </Grid>
          <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('Navigation system')}
                                onChange={handleCheckboxChange}
                                value="Navigation system"
                              />
                            }
                            label="Navigation system"
                          />
            
          </Grid>
          <Grid item xs={4}>
            
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('Automatic air conditioning')}
                                onChange={handleCheckboxChange}
                                value="Automatic air conditioning"
                              />
                            }
                            label="Automatic air conditioning"
                          />
            
          </Grid>
           <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('Auxiliary heating')}
                                onChange={handleCheckboxChange}
                                value="Auxiliary heating"
                              />
                            }
                            label="Auxiliary heating"
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

export default React.memo(Equipment)