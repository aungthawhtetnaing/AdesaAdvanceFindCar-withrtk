import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControl, FormControlLabel, Grid, RadioGroup,Radio, Autocomplete, TextField } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { bodyTypeCars, dataCars } from '../redux/components/listCarsSlice';
import { powerCars } from '../redux/components/powerCarsSlice';
import { powerDetail } from '../redux/components/powerDetailSlice';


const PowerCars = () => {
  const [category,setCategory] = useState('1')


  const [fromValue, setFromValue] = useState('Any');
  const [toValue, setToValue] = useState('Any');

  const handleFromChange = (event, newValue) => {
    setFromValue(newValue);
    
  };

  const handleToChange = (event, newValue) => {
    setToValue(newValue);
    
  };

  

     const power =[fromValue,toValue]
     console.log("Power of car ??????",power);


    const powerData = useSelector(state=>state.power)
    console.log('Category ???????',category);

    const powerD=useSelector(state=>state.pDetail)
    const options = powerD.powerDt?.value ?? []
    console.log('pDetail ???????',options);


    // Get the index of the selected value in the options array
  const fromIndex = options.indexOf(fromValue);
  const toIndex = options.indexOf(toValue);

  // If the "to" value is selected, limit the options of the "from" Autocomplete
  const fromOptions = toValue === 'Any' ? options : options.slice(0, toIndex);

  // If the "from" value is selected, limit the options of the "to" Autocomplete
  const toOptions = fromValue === 'Any' ? options : options.slice(fromIndex + 1);


  
    
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(dataCars({power:power}))
    },[fromValue,toValue])
    useEffect(()=>{
      dispatch(powerCars())
    },[])
    useEffect(()=>{
      dispatch(powerDetail(category))
    },[category])
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
           Power
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <FormControl sx={{display:"block"}}  noValidate >
            
            <RadioGroup value={category}onChange={e=>setCategory(e.target.value)} row>
            <FormControlLabel sx={{marginLeft:"10px"}} value={powerData.power[0]?.id}  control={<Radio/>} label="hp" />
            <FormControlLabel value={powerData.power[1]?.id} control={<Radio/>} label="kW"/>

             </RadioGroup>
           </FormControl>
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
  )
}

export default  React.memo(PowerCars)


