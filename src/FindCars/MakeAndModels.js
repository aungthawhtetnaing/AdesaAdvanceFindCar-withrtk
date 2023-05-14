
import { Autocomplete, Box, Button, Checkbox, Chip, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Table, TableCell, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { brandCars } from '../redux/components/brandsSlice';
import { modelCars } from '../redux/components/modelSlice';
import { Stack } from '@mui/system';
import { findCars } from '../redux/components/findCarsSlice';
import { CheckBox } from '@mui/icons-material';
import CheckBoxOutlineBlankTwoToneIcon from '@mui/icons-material/CheckBoxOutlineBlankTwoTone';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { dataCars, listCars, makeCars, modelCarss } from '../redux/components/listCarsSlice';

const icon = <CheckBoxOutlineBlankTwoToneIcon  fontSize="small" />;
const checkedIcon = <CheckBoxOutlinedIcon fontSize="small" />;
const MakeAndModels = () => {
  const [value, setValue] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  
  const handleOptionChange = (event, value) => {
    setSelectedOptions(value);
  };

  const modelCar = selectedOptions.map(item => item.name);
  const model = modelCar
  // console.log("Model CAr ;;;;;;;;;;;;",model);

  const detail = useSelector((state)=>state.find)
  const detailCar =detail.modelCar
  // console.log("detail Car........",detailCar);

    const [expanded, setExpanded] = useState('panel1');
    const dispatch = useDispatch()

    const brand = useSelector((state)=>state.brands)
    const brands = brand.brands
    // console.log('make Car /////////',brands);
    
  //  const model = useSelector((state)=>state.list)
  //  const models =model
  //  console.log('model name //////////',models);
    
    const make=value?.name
    console.log("car name //////////",make);

    // const modelcar= models.lists.model[0].name
    // console.log("Model CAr ;;;;;;;;;;;;",modelcar);
    const handleClick =(id)=>{
      dispatch(findCars(id))
    }
  // lll
    useEffect(()=>{
      dispatch(brandCars())
   
    },[])

    useEffect(()=>{
      dispatch(dataCars({make:make}))  
    },[make,selectedOptions])
    
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const renderTags = (value, getTagProps) =>
    value.map((option, index) => (
      <div key={index}{...getTagProps({ index })} >{option.name},</div>
    ));


  return (
    <div>
         <Grid item  sx={{width:120,width:1115,marginLeft:30,marginTop:"15px"}} >
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  >
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:"bold",fontSize:18 }}>
                  Make & model
                </Typography>
                <Typography sx={{marginLeft:"auto",fontSize:12}}></Typography>
              </AccordionSummary>
              <AccordionDetails >
                <Table sx={{"& td": { border: 0 },"& th": { border: 0 }}} >
                    <TableRow>
                        <TableCell>
                            <Autocomplete
                              sx={{ width: 400 }}
                              options={brands}
                              autoHighlight
                              
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                              getOptionLabel={(option) => option.name}
                              isOptionEqualToValue={(option, value) => option.id === value.id}
                              renderOption={(props, option) => (
                                <Typography {...props}>
                                  <Button  sx={{ width: 399,color:"black" }} onClick={()=>handleClick(option.id)}>
                                    <Typography sx={{marginRight:"auto"}}>{option.name}</Typography>
                                    <Typography sx={{marginLeft:"auto"}}>{option.car_count}</Typography>
                                    </Button>
                                </Typography>
                              )}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="All Make"
                                  inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                  }}
                                />
                              )}
                            />
                        </TableCell>

                        
                        <TableCell>
                            <Autocomplete
                                multiple
                                id="checkboxes-tags-demo"
                                options={detailCar}
                                disableCloseOnSelect
                                
                                value={selectedOptions}
                                onChange={handleOptionChange}
                                getOptionLabel={(option) => option.name}
                                renderOption={(props, option, { selected }) => (
                                  <li {...props}>
                                    <Checkbox
                                      icon={icon}
                                      checkedIcon={checkedIcon}
                                      style={{ marginRight: 8 }}
                                      checked={selected}
                                      
                                    />
                                    <Typography>{option.name}</Typography>
                                    <Typography sx={{marginLeft:"auto"}}>{option.car_count}</Typography>
                                  </li>
                                )}
                                style={{ width: 500 }}
                                renderInput={(params) => (
                                  <TextField {...params} label="All Model"  />
                                )}
                                renderTags={renderTags} />
                         </TableCell>

                    </TableRow>
                </Table>
            </AccordionDetails>
          </Accordion>
      </Grid>
    </div>
  )
}

export default React.memo(MakeAndModels)