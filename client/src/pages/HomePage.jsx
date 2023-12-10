import React from 'react';
import Box from '@mui/material/Box';
import pic from '../pics/paper.png'

const HomePage = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '200vh',
        }}
      />

    </div>
  );
};

export default HomePage;