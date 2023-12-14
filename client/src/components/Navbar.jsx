import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../utils/style.css';
import Dropdown from './Dropdown';
import Auth from '../utils/auth';

export default function Navbar({ selectedTheme, setSelectedTheme }) {
  const isLoggedIn = Auth.loggedIn();


  return (
    <Box className={'topNav'} style={{ background: selectedTheme.colors.gradient }}>
      <Box display="flex" justifyContent="flex-end" className="navbar">
        <Dropdown selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
        <Box display="flex" flexDirection="row" md={{ flexDirection: 'column' }}>
          {isLoggedIn ? (
            <>
              <Button variant="contained" sx={{ backgroundColor: selectedTheme.colors["button-color"] }} className="buttonNav" onClick={() => Auth.logout()}>
                Logout
              </Button>
              <Button variant="contained" sx={{ backgroundColor: selectedTheme.colors["button-color"] }} className="buttonNav">
                <Link className="linkStyle" style={{ color: selectedTheme.colors.colorText }} to="/collections">
                  Collections
                </Link>
              </Button>
              <Button variant="contained" sx={{ backgroundColor: selectedTheme.colors["button-color"] }} className="buttonNav">
                <Link className="linkStyle" style={{ color: selectedTheme.colors.colorText }} to="/decks">
                  Decks
                </Link>
              </Button>
            </>
          ) : (
            <Button variant="contained" sx={{ backgroundColor: selectedTheme.colors["button-color"] }} className="buttonNav navbuts">
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