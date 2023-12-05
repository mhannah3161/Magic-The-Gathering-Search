import React from 'react';

function Footer() {
  return (
      <div className='py-5 text-center'>
        <p className='text-sm mt-2 opacity-50'>
        &copy; {new Date().getFullYear()} Anthony Ciccone, Jacob Campa & Michael Hannah All rights reserved.
        </p> <br/>
        <p className='text-sm mt-2 opacity-50'>
            API: <a href="https://https://magicthegathering.io/">Magic The Gathering.io</a>
        </p>

      </div>
  );
}

export default Footer;