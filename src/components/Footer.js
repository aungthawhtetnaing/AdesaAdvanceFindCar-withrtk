import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// const useStyle = makeStyles({
//     style:{
//         color:"white"
//     }
// })
const Footer = () => {
    // const classes=useStyle()
  return (
    <div style={{backgroundColor:"#262626"}} >
        
            <TableContainer style={{color:"white"}} >
                <Table  sx={{ width: 1140,margin:"auto",tableLayout: "auto" ,"& td": { border: 0 },"& th": { border: 0 }}} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell  sx={{color: "white",fontSize:18}}>Gets to know us</TableCell>
                            <TableCell  sx={{color: "white",fontSize:18}} >Available service</TableCell>
                            <TableCell  sx={{color: "white",fontSize:18}}>Products on sale</TableCell>
                            <TableCell  sx={{color: "white",fontSize:18}}>Let us help you</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell  sx={{color: "white"}}>About Adsea</TableCell>
                            <TableCell  sx={{color: "white"}}>Sell Your Cars</TableCell>
                            <TableCell  sx={{color: "white"}}>Buy Pessenger Cars</TableCell>
                            <TableCell  sx={{color: "white"}}>FAQ</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  sx={{color: "white"}}>Blog</TableCell>
                            <TableCell  sx={{color: "white"}}>Start in our auctions</TableCell>
                            <TableCell  sx={{color: "white"}}>Buy vans and light trucks</TableCell>
                            <TableCell  sx={{color: "white"}}>Info Center</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  sx={{color: "white"}}>Press kit</TableCell>
                            <TableCell  sx={{color: "white"}}>Why work with us?</TableCell>
                            <TableCell  sx={{color: "white"}}>Buy damaged vehicles</TableCell>
                            <TableCell  sx={{color: "white"}}>How can I register?</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  sx={{color: "white"}}>Careers</TableCell>
                            <TableCell  sx={{color: "white"}}>Order transport</TableCell>
                            <TableCell  sx={{color: "white"}}>Buy margin vehicles</TableCell>
                            <TableCell  sx={{color: "white"}}>How can I bid?</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  sx={{color: "white"}}>Our culture</TableCell>
                            <TableCell  sx={{color: "white"}}>Get export expertise</TableCell>
                            <TableCell  sx={{color: "white"}}></TableCell>
                            <TableCell  sx={{color: "white"}}>Customer service</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  sx={{color: "white"}}>Contact</TableCell>
                            <TableCell  sx={{color: "white"}}>Bidding tools</TableCell>
                            <TableCell  sx={{color: "white"}}></TableCell>
                            <TableCell  sx={{color: "white"}}>Closing days</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  sx={{color: "white"}}>Customer Success Stories</TableCell>
                            <TableCell  sx={{color: "white"}}>Download our mobile app</TableCell>
                            <TableCell  sx={{color: "white"}}></TableCell>
                            <TableCell  sx={{color: "white"}}></TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
                <Typography sx={{backgroundColor:"#3d3d3d",paddingTop:5,paddingBottom:5}}>
                    <TableContainer>
                        <Table sx={{ width: 1140,margin:"auto",tableLayout: "auto" ,"& td": { border: 0 },"& th": { border: 0 }}}>
                            <TableBody>
                                <TableRow>
                                    <TableCell  sx={{color: "white"}}>
                                    <Typography>
                                        <img src='https://www.adesa.eu/v6/images/adesa-logo-footer.svg' height={32}/>
                                    </Typography>
                                    </TableCell>
                                    <TableCell  sx={{color: "white"}}>
                                        <Typography sx={{marginLeft:80,fontSize:20}}>
                                        <FacebookIcon/><YouTubeIcon/><TwitterIcon/><InstagramIcon/>
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell  sx={{color: "white",fontSize:12}}>© 2023 ADESA. A KAR company. All rights reserved.</TableCell>
                                    <TableCell  sx={{color: "white",fontSize:12,fontWeight:"bold",marginLeft:40}}><span>Terms and conditions </span>&nbsp;&nbsp;&nbsp;&nbsp;<span> mpressum</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Privacy NoticeExercise </span>&nbsp;&nbsp;<span>your rightsCookie </span>&nbsp;&nbsp;&nbsp;&nbsp;<span> settings</span></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Typography>
            </TableContainer>

            
      
    </div>
  )
}

export default Footer