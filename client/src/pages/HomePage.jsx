import React from 'react';
import Box from '@mui/material/Box';
import pic from '../pics/paper.png'

const HomePage = () => {
  return (
    <div 
    style={{
      height: '200vh',
      width: '100%',
    }}
    >
      <Box
        display="flex"
        justifyContent="center"
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          height: '180vh',
        }}
      />

    </div>
  );
};

export default HomePage;