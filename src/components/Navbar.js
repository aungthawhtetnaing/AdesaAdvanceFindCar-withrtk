import { AppBar, Autocomplete, Button, Grid, Tab, Tabs, TextField, Toolbar, Typography, useMediaQuery,useTheme } from '@mui/material'
import React, { useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Box } from '@mui/system';
import DrawerComp from './DrawerComp';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import { Link } from 'react-router-dom';

const state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                ]

const Navbar = ({links}) => {
    const theme = useTheme();
    console.log(theme);
    const[value,setValue] = useState()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    console.log(isMatch);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
    }
  return (
    <AppBar id='navbar' sx={{backgroundColor:'white'}}>
    <Toolbar>
        {isMatch ?(
            <>
            <DrawerComp links={links}/>
             <Typography  sx={{color:'inherit' ,marginLeft:'auto'}}>
                    <AccountBalanceIcon/>
                </Typography>
            
            </>
        ):
        (<Grid sx={{placeItems:"center", marginLeft:27,marginTop:2.3}} container>
            <Grid item xs={2}>
                <Typography>
                    <img src='https://www.adesa.eu/v6/images/adesa-logo-desktop.svg' height={32}/>
                </Typography>
            </Grid>
            {/* <Grid item xs={6}>
                <Tabs 
                    textColor='inherit'
                    indicatorColor='secondary'
                    value={value}
                    onChange={(e,val)=>setValue(val)}
                >
                  {links.map((link,index)=>(
                    <Tab key={index} label={link}/>
                  ))}

                </Tabs>
            </Grid>
            <Grid item xs={1}/> */}
            <Grid item xs={4}/> 
            <Grid item xs={4}>
                    <Box display="flex">
                        <Button component={Link} to="/login" onClick={() => sessionStorage.clear('activeTab')} sx={{marginLeft:"auto", background:'white', color:"#008C95" }} variant='outlined'>Login</Button>
                        <Button sx={{marginLeft:"15px",background:'#008C95'}} variant='contained' endIcon={<PersonAddAltSharpIcon/>}>Register</Button>
                        {/* <Box  sx={{width:200,marginLeft:1}}> */}
                            <Autocomplete
                                options = {state}
                                sx={{width:200,marginLeft:"15px"}}
                                size="small"
                                renderInput={(param)=>(
                                    <TextField {...param} placeholder="English"/>
                                )}
                            />
                         {/* </Box> */}
                        
                    </Box>
            </Grid>
            <Grid item xs={6} sx={{marginTop:1.8}}>
            <Tabs 
                textColor='primary'
                indicatorColor='primary'
                value={value}
                onChange={(e,val)=>setValue(val)}
            >
                <Tab component={Link} to="/home" onClick={() => sessionStorage.clear('activeTab')}  sx={{color:"black",fontWeight:"bold"}} label="Home" />
                <Tab component={Link} to="/findcar/advanced" onClick={() => sessionStorage.clear('activeTab')}  sx={{color:"black",fontWeight:"bold"}} label="Find cars" />
                {/* <Tab component={Link} to="/auctions" onClick={() => sessionStorage.clear('activeTab')}  sx={{color:"black",fontWeight:"bold"}} label="Auctions" />
                <Tab component={Link} to="/sell" onClick={() => sessionStorage.clear('activeTab')}  sx={{color:"black",fontWeight:"bold"}} label="Sell" /> */}
               
            </Tabs>
        </Grid>
        </Grid>
        
        )
        
        }

    </Toolbar>
</AppBar>
  )
}

export default Navbar