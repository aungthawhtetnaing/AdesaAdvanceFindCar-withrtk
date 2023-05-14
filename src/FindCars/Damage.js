import React, { useCallback, useEffect, useState } from 'react'
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
const Damage = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  
    

    const damage=useSelector(state=>state.damage)
    const dCars =damage.damage
    console.log("damage Car ??????",dCars);
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(damageCars())
    },[1])

    useEffect(()=>{
      dispatch(dataCars({damage:selectedValues}))
    },[selectedValues])

    console.log('Damage***********',selectedValues);
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
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:"bold",fontSize:18 }}>
          Damage
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormControl sx={{display:"block"}}  noValidate >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  {dCars.map((damage) => (
                    
                      <Grid item xs={4} key={damage.id}>
                        <FormControlLabel
                          control={
                            <Checkbox
                             
                              // checked={selectedValues.includes(damage.id)}
                              onChange={handleCheckboxChange}
                              value={damage.id}
                            />
                          }
                          label={damage.name}
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

export default React.memo(Damage)