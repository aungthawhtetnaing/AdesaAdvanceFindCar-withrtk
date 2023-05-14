import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControl, FormControlLabel, Grid } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { bodyTypeCars, dataCars } from '../redux/components/listCarsSlice';

const BodyType = () => {
    const [selectedValues, setSelectedValues] = useState([]);

    const dispatch = useDispatch()
    //lll
    useEffect(()=>{
        dispatch(dataCars({type:selectedValues}))
    },[selectedValues])
    
    console.log('BodyType***********',selectedValues);
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
           Body type
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
                                checked={selectedValues.includes('Saloon')}
                                onChange={handleCheckboxChange}
                                value="Saloon"
                              />
                            }
                            label="Saloon"
                          />
            
          </Grid>
          <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('Estate')}
                                onChange={handleCheckboxChange}
                                value="Estate"
                              />
                            }
                            label="Estate"
                          />
            
          </Grid>
          <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('Cabriolet')}
                                onChange={handleCheckboxChange}
                                value="Cabriolet"
                              />
                            }
                            label="Cabriolet"
                          />
            
          </Grid>
          <Grid item xs={4}>
            
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('Compact')}
                                onChange={handleCheckboxChange}
                                value="Compact"
                              />
                            }
                            label="Compact"
                          />
            
          </Grid>
           <Grid item xs={4}>
           
            <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes('Coupe')}
                                onChange={handleCheckboxChange}
                                value="Coupe"
                              />
                            }
                            label="Coupe"
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

export default React.memo(BodyType)