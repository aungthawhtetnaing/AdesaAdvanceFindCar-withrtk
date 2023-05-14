import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CottageIcon from '@mui/icons-material/Cottage';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
const Login = () => {
    const [isSignup,setIsSignup] = useState(false)
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        password:"",
    })
    console.log(isSignup);

    const handleChange =(e)=>{
        setInputs((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(inputs);
    }

    const resetState = () =>{
        setIsSignup(!isSignup)
        setInputs({name:"",email:"",password:""})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Box 
        display="flex"  
        flexDirection={"column"} 
        maxWidth={400}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        color={"#3C2441"}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
            ":hover":{
                boxShadow:'10px 10px 20px #ccc'
            }
        }}
        >
             <Typography variant='h4' padding={3} style={{ display: 'flex', justifyContent: 'center' }}>
                {isSignup ? <BookmarkAddIcon style={{fontSize:"40px"}}/> : <CottageIcon style={{fontSize:"40px"}}/>}
                {isSignup ? "Sign up" : "Login"}
            </Typography>
           {isSignup && (
             <TextField 
             name='name'
             value={inputs.name}
             onChange={handleChange}
             margin='normal' 
             type={'text'} 
             variant='outlined' 
             placeholder='Name'
             InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <PersonIcon style={{color:"#3C2441"}}/>
                    </IconButton>
                  </InputAdornment>
                )
              }}
             />

           )}

            <TextField 
             name='email'
             value={inputs.email}
             onChange={handleChange}
            margin='normal' 
            type={'email'} 
            variant='outlined' 
            placeholder='Email'
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <MailIcon style={{color:"#3C2441"}}/>
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <TextField 
             name='password'
             value={inputs.password}
             onChange={handleChange}
            margin='normal' 
            type={'password'} 
            variant='outlined' 
            placeholder='Password'
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <KeyIcon style={{color:"#3C2441"}}/>
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Button 
                endIcon={isSignup ?<HowToRegIcon/>: <LockOpenIcon/>}
               
                type='submit'
                sx={{marginTop:3, borderRadius:3}} 
                variant='contained'color='primary'>
               {isSignup ?"Signup":"Login"}
            </Button>

            <Button
               onClick={resetState}
                sx={{marginTop:3, borderRadius:3}}
                >to{isSignup ? "login":"Signup"}
            </Button>
        </Box>
        </form>
    </div>
  )
}

export default Login