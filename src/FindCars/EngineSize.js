// import React, { useState } from 'react';
// import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Grid, TextField, Typography } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// const state = [
//   'Any',
//   '50',
//   '5,000',
//   '10,000',
//   '20,000',
//   '30,000',
//   '40,000',
//   '50,000',
//   '60,000',
//   '70,000',
//   '80,000',
//   '90,000',
//   '100,000',
//   '125,000',
//   '140,000',
//   '150,000',
//   '175,000',
//   '200,000',
// ];

// const state2 = [
//     'Any',
//     '50',
//     '5,000',
//     '10,000',
//     '20,000',
//     '30,000',
//     '40,000',
//     '50,000',
//     '60,000',
//     '70,000',
//     '80,000',
//     '90,000',
//     '100,000',
//     '125,000',
//     '140,000',
//     '150,000',
//     '175,000',
//     '200,000',
// ];

// const Mileage = () => {
//   const [fromValue, setFromValue] = useState('Any');
//   const [toValue, setToValue] = useState('Any');

//   const handleFromChange = (event, newValue) => {
//     setFromValue(newValue);
//     if (toValue !== 'Any' && parseInt(toValue) <= parseInt(newValue)) {
//       setToValue(newValue);
//     }
//   };
//   console.log("Mileage from////////",fromValue);
//   console.log("Mileage to////////",toValue);
//   const mile =[fromValue,toValue]
//   console.log("Mile ////////", mile);

//   const handleToChange = (event, newValue) => {
//     setToValue(newValue);
//     if (fromValue !== 'Any' && parseInt(fromValue) >= parseInt(newValue)) {
//       setFromValue(newValue);
//     }
//   };

//   const toOptions = state2.slice(state2.indexOf(fromValue));

//   return (
//     <div>
//       <Grid item sx={{ width: 120, width: 1115, marginLeft: 30, marginTop: '15px' }}>
//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
//             <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', fontSize: 18 }}>Mileage</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//               <Grid item xs={1.2}>
//                 <Autocomplete
//                   options={state}
//                   value={fromValue}
//                   onChange={handleFromChange}
//                   disableClearable
//                   sx={{ width: 105, marginLeft: '15px' }}
//                   size="small"
//                   renderInput={(params) => <TextField {...params} label="From" />}
//                 />
//               </Grid>
//               <Grid item xs={1}>
//                 <Autocomplete
//                   options={toOptions}
//                   value={toValue}
//                   onChange={handleToChange}
//                   disableClearable
//                   sx={{ width: 105, marginLeft: '15px' }}
//                   size="small"
//                   renderInput={(params) => <TextField {...params} label="To" />}
//                 />
//               </Grid>
//             </Grid>
//           </AccordionDetails>
//         </Accordion>
//       </Grid>
//     </div>
//   );
// };

// export default Mileage;


import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Grid, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dataCars } from '../redux/components/listCarsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { engineCars } from '../redux/components/engineSizeSlice';


const EngineSize = () => {
const [expanded, setExpanded] = useState('panel1');
  const [fromValue, setFromValue] = useState('Any');
  const [toValue, setToValue] = useState('Any');

  const handleFromChange = (event, newValue) => {
    setFromValue(newValue);
    
  };

  const handleToChange = (event, newValue) => {
    setToValue(newValue);

  };

  
  const engine=useSelector(state=>state.engine)
  const options=engine.engine
  console.log('Engine???????????',engine);
  
  
  // Get the index of the selected value in the options array
  const fromIndex = options.indexOf(fromValue);
  const toIndex = options.indexOf(toValue);

  // If the "to" value is selected, limit the options of the "from" Autocomplete
  const fromOptions = toValue === 'Any' ? options : options.slice(0, toIndex);

  // If the "from" value is selected, limit the options of the "to" Autocomplete
  const toOptions = fromValue === 'Any' ? options : options.slice(fromIndex + 1);


  const enginesize =[fromValue,toValue]
  console.log("mile??????",enginesize);
  const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(dataCars({mile:mile}))
//   },[fromValue,toValue])

 

 
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(()=>{
    dispatch(engineCars())
  },[])

  useEffect(()=>{
    dispatch(dataCars({enginesize:enginesize}))
  },[fromValue,toValue])

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
            Engine size
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

export default React.memo(EngineSize)
