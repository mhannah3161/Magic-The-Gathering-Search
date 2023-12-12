import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../utils/style.css';

export default function Navbar({ selectedTheme, isLoggedIn }) {
  return (
    <Box className={'topNav'} style={{ background: selectedTheme.colors.gradient }}>
      <Box display="flex" justifyContent="flex-end" className="navbar">
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
            <TextField label="Seek" focused />
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" className="navbuts" md={{ flexDirection: 'column' }}>
          {isLoggedIn && (
            <>
              <Button variant="contained" style={{ backgroundColor: selectedTheme.colors["button-color"] }} className="buttonNav">
                Logout
              </Button>
              <Button variant="contained" style={{ backgroundColor: selectedTheme.colors["button-color"] }} className="buttonNav">
                <Link className="linkStyle" style={{ color: selectedTheme.colors.colorText }} to="/collections">
                  Collections
                </Link>
              </Button>
              <Button variant="contained" style={{ backgroundColor: selectedTheme.colors["button-color"] }} className="buttonNav">
                <Link className="linkStyle" style={{ color: selectedTheme.colors.colorText }} to="/decks">
                  Decks
                </Link>
              </Button>
            </>
          )}
          {!isLoggedIn && (
            <Button variant="contained" style={{ backgroundColor: selectedTheme.colors["button-color"] }} className="buttonNav">
              <Link className="linkStyle" style={{ color: selectedTheme.colors.colorText }} to="/login">
                Login!
              </Link>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
