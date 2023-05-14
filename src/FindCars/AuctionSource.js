
import { Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dataCars, listCars } from '../redux/components/listCarsSlice';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
const AuctionSource = () => {
    const [expanded, setExpanded] = useState('panel1');
    const [category,setCategory] = useState('All Sources')
    const dispatch = useDispatch()

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    console.log(category);
    
    useEffect(()=>{
      dispatch(dataCars({category:category}))
    },[category])

    // useEffect(()=>{
    //   dispatch(listCars())
    // },[])
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
                Auction Source
            </Typography>
            <Typography sx={{marginLeft:"auto",fontSize:12}}>{category}</Typography>
        </AccordionSummary>
        
        <AccordionDetails >
            
        <Typography>
          <FormControl sx={{display:"block"}}  noValidate >
        
            <RadioGroup value={category}onChange={e=>setCategory(e.target.value)} row>
            <FormControlLabel value="All Sources"  control={<Radio/>} label="All Source" />
            <FormControlLabel sx={{marginLeft:"200px"}} value="Domestic auctions" control={<Radio/>} label="Domestic auctions"/>

            </RadioGroup>
        </FormControl>
        </Typography>
        </AccordionDetails>
</Accordion>
</Grid>

    </div>
  )
}

export default React.memo(AuctionSource)