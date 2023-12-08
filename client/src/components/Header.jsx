import React from 'react';
import Dropdown from './Dropdown';

const Header = ({ handleChange }) => {
  return (
      <header className='background-color'>
      <Dropdown handleChange={handleChange} />
      </header>
  );
}

export default Header;