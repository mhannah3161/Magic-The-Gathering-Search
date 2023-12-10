import React from 'react';

function Footer({ selectedTheme }) {
  return (
      <div className='footer'>
        <p style={{color:selectedTheme.colors.colorText}} className='footer-text'>
        &copy; {new Date().getFullYear()} Anthony Ciccone, Jacob Campa & Michael Hannah All rights reserved.
        </p> <br/>
        <p style={{color:selectedTheme.colors.colorText}} className='footer-api'>
            API: <a style={{color:selectedTheme.colors.colorText}} className='footer-link' href="https://https://magicthegathering.io/">Magic The Gathering.io</a>
        </p>

      </div>
  );
}

export default Footer;