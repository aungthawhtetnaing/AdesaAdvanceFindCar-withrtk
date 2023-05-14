import { purple } from '@mui/material/colors';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import FindCars from './components/FindCars';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Test from './components/Test';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import {  Sell } from '@mui/icons-material';
import Login from './Auth/Login';
import React, { useEffect } from 'react';
import FindCarsLists from './FindCarsFolder/FindCarsLists';
import FindCarsDetail from './FindCarsFolder/FindCarsDetail';
const theme=createTheme({
  palette:{
    primary:{
      main:"#008C95"
    }
  },
  typography:{
    fontFamily:"Quicksand",
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
})
function App() {

  // Clear sessionStorage on beforeunload event
  useEffect(() => {
    sessionStorage.clear();
  });

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/findcar/advanced" element={<FindCars/>} />
            <Route path="/findcar/findCarsLists/:id" element={<FindCarsDetail/>} />
            <Route path="/findcar" element={<FindCarsLists/>}/>
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/auctions" element={<Test/>} />
            <Route path="/sell" element={<Sell/>} /> */}
          </Routes>
          
          <br/><br/><br/>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App
