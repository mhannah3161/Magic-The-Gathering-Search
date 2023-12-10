import React from 'react';

function Footer() {
  return (
      <div className='footer'>
        <p className='footer-text'>
        &copy; {new Date().getFullYear()} Anthony Ciccone, Jacob Campa & Michael Hannah All rights reserved.
        </p> <br/>
        <p className='footer-api'>
            API: <a className='footer-link' href="https://https://magicthegathering.io/">Magic The Gathering.io</a>
        </p>

      </div>
  );
}

export default Footer;