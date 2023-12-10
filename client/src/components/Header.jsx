import React from 'react';
import Dropdown from './Dropdown';


const Header = ({ selectedTheme, setSelectedTheme }) => {
  return (
      <header className='background-color'>
      <Dropdown selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
      </header>
  );
}

export default Header;