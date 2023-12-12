import React from 'react';
import Box from '@mui/material/Box';
import Search from './Search.jsx'


const Header = () => {
  return (
      <header className='background-color'>
        <Box display="flex" flexDirection="row">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 0.5, width: '60ch' },
            }}
            noValidate
            autoComplete="off"
            justifyContent="center"
          >
            <Search />
          </Box>
        </Box>
      </header>
  );
}

export default Header;