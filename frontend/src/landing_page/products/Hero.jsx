/** @format */

import React from 'react';
function Hero() {
  return (
    <div className='container text-center'>
      <div className='mt-5'>
        <h2>Technology</h2>
        <h3 style={{ fontSize: '1.0rem' }} className='text-muted mt-3'>
          Sleek, modern and intutive trading platform
        </h3>
        <p className='mt-3'>
          Check out our{' '}
          <a href=''>
            investment offering <i className='fa-solid fa-arrow-right'></i>{' '}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
