import { Button, Grid, Table, TableBody, TableCell, TableContainer, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { detailCarListss } from '../redux/components/detailCarsListsSlice';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
const FindCarsDetail = () => {
    const {id}=useParams()
    console.log(id);
    const dispatch=useDispatch()
    const detailCars =useSelector(state=>state.detailLists)
    const detail=detailCars.detailCarsList
    console.log(detail[0]?.name);
    const navigate = useNavigate()
    const handleBack=()=>{
        navigate("/findcar");
    }
    useEffect(()=>{
        dispatch(detailCarListss(id))
    },[])

  return (
    <div>
        <Box sx={{width:1100,margin:"auto",marginTop:18 }}>
            <Grid container rowSpacing={1}  >
                <Grid item xs={8}>
                <Button onClick={handleBack} endIcon={<DirectionsCarFilledIcon/>}  sx={{background:'white', color:"#008C95",marginLeft:"auto" }} variant='outlined'>Back CarList
                </Button>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={8}>
                    <Typography sx={{fontSize:"30px",fontWeight:"bold",marginLeft:"auto"}}>
                        {detail[0]?.make_name}&nbsp;
                     -{detail[0]?.name}&nbsp;
                     -{detail[0]?.fuel_type}&nbsp;
                     -{detail[0]?.transmission}&nbsp;
                     -{detail[0]?.power_hp}
                     -{detail[0]?.g_km}km
                    </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={8}>
                    <img src={detail[0]?.image_path} style={{width:"700px" ,height:"400px"}}/>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={8}>
                    <TableContainer>
                        <Table sx={{width:'700px'}}>
                            <TableBody>
                                <TableCell>First registration</TableCell>
                                <TableCell>
                                {detail[0]?.first_registration}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Model year</TableCell>
                                <TableCell>
                                {detail[0]?.first_registration}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Milage</TableCell>
                                <TableCell>
                                {detail[0]?.g_km}km
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Fuel type</TableCell>
                                <TableCell>
                                {detail[0]?.fuel_type}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Transmission type</TableCell>
                                <TableCell>
                                {detail[0]?.transmission}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>CO2 emission standard</TableCell>
                                <TableCell>
                                {detail[0]?.emission_standard}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>CO2 emission (NEDC)</TableCell>
                                <TableCell>
                                {detail[0]?.g_km}km
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Power</TableCell>
                                <TableCell>
                                {detail[0]?.power_kw}
                                {'('+detail[0]?.power_hp+')'}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Engine size</TableCell>
                                <TableCell>
                                {detail[0]?.engine_size}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Body type</TableCell>
                                <TableCell>
                                {detail[0]?.body_type}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Paint</TableCell>
                                <TableCell>
                                {detail[0]?.colour}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Origin country</TableCell>
                                <TableCell>
                                {detail[0]?.origin_country}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Auction type</TableCell>
                                <TableCell>
                                {detail[0]?.auction_type}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Make name</TableCell>
                                <TableCell>
                                {detail[0]?.make_name}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>model name</TableCell>
                                <TableCell>
                                {detail[0]?.model_name}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Price</TableCell>
                                <TableCell>
                                {detail[0]?.price}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Seller</TableCell>
                                <TableCell>
                                {detail[0]?.seller}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Damage</TableCell>
                                <TableCell>
                                {detail[0]?.damage}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>VatRegime</TableCell>
                                <TableCell>
                                {detail[0]?.vat_regime}
                                </TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>X_time</TableCell>
                                <TableCell>
                                {detail[0]?.x_time}
                                </TableCell>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default FindCarsDetail