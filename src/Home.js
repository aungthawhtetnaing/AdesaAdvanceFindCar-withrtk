import React, { useState } from 'react';
import { Button } from '@mui/material';

const Home = () => {
  const [showFirst, setShowFirst] = useState(true);

  const handleClick = () => {
    setShowFirst(!showFirst);
  };

  return (
    <>
      {showFirst ? (
        <div style={{width:1100,margin:"auto",marginTop:"150px"}}>
          <h1>This is the first part</h1>
          <Button onClick={handleClick}>Hide</Button>
        </div>
      ) : (
        <div>
          <h1>This is the second part</h1>
          <Button onClick={handleClick}>Show</Button>
        </div>
      )}
    </>
  );
};

export default Home
