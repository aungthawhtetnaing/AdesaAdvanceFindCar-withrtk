import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid ,Typography,CardContent,CardMedia,CardActionArea,Card, TableContainer, Table, TableRow, TableCell, Button} from '@mui/material'
import { Box } from '@mui/system'
import { detailCarListss } from '../redux/components/detailCarsListsSlice'
import { Link, useNavigate } from 'react-router-dom';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
const FindCarsLists = () => {
    // const dispatch=useDispatch()


    const list = useSelector((state)=>state.list)
    const listsCars = list.lists.data
    console.log('DatalistCars ///////////',listsCars);
    const navigate = useNavigate()
    // useEffect(()=>{
    //     dispatch(detailCarListss(listsCars.id))

    // },[])
    const handleBack=()=>{
        navigate("/findcar/advanced")
    }
  return (
    <div>
                <Button onClick={handleBack} endIcon={<DirectionsCarFilledIcon/>}  sx={{background:'white', color:"#008C95",marginLeft:"250px",marginTop:18 }} variant='outlined'>Back CarList
                </Button>
        {listsCars.map(list=>(
            <div key={list.id}>
               <Card sx={{width:900,margin:"auto",marginTop:"15px"}}>
               <Link to={`/findcar/findCarsLists/${list.id}`} style={{textDecoration:"none",color:"black"}}>
                <CardActionArea>
               
                   
                    <CardContent>
                    <Typography >
                    <Typography >
                      <span style={{fontSize:"20px",fontWeight:"bold"}}>{'('+list.make_name+')'}</span>
                      <span style={{fontSize:"20px",fontWeight:"bold"}}>{list.name}</span>-{list.fuel_type}
                      -{list.transmission}-{list.g_km}km
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                        {list.auction_type}
                    </Typography>
                    <br/>
                    </Typography>
                   
                    <Typography>
                    <Box sx={{ display: 'flex', pl: 1, pb: 1 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    sx={{width:300}}
                    image={list.image_path}
                    alt="green iguana"
                    />
                   
                    <Typography gutterBottom component="div" variant="h7"  >
                    {/* <span style={{fontWeight:"bold"}}>
                       ESTIMATED PRICE
                    </span><br/>{list.price}<br/><br/>
                    <span >{list.body_type}</span><br/>
                    {list.engine_size}
                    {list.emission_standard} */}
                    <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{paddingLeft:"16px"}}>
                        <Grid item xs={12} sx={{fontWeight:"bold"}}>
                        ESTIMATED PRICE<br/>
                        {list.price}
                        </Grid>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={4}>
                        {list.body_type}<br/>
                        {list.engine_size}
                        </Grid>
                        <Grid item xs={4}>
                        {list.emission_standard}<br/>
                        {list.seller}
                        </Grid>
                        <Grid item xs={4}>
                        {list.power_kw}{'('+list.power_hp+')'}<br/>
                        {list.origin_country}
                        </Grid>
                    </Grid>
                    </Typography>
                    </Box>
                    
                    </Typography>
                   
                   
                    <Typography variant="body2" component="div" color="text.secondary">
                    <Typography variant="body2" color="text.secondary">
                        Colour:{list.colour}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        FuelType:{list.fuel_type}
                    </Typography>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Link>
                </Card>
                    


                



            </div>
        ))}
    </div>
  )
}

export default FindCarsLists