/** @format */

import React from 'react';
function Pricing() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <h2 style={{ fontSize: '1.55rem' }}>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href=''>
            See Pricing <i class='fa-solid fa-arrow-right'></i>
          </a>
        </div>
        <div className='col-2'></div>
        <div className='col-6' style={{ display: 'flex' }}>
          <div>
            <img src='media/images/pricing-eq.svg' alt='' width={'60%'} />
            <p style={{ fontSize: '10px' }}>Free account opening</p>
          </div>
          <div>
            <img src='media/images/pricing-eq.svg' alt='' width={'60%'} />
            <p style={{ fontSize: '10px' }}>
              Free equity delivery
              <br /> and direct mutual funds{' '}
            </p>
          </div>
          <div>
            <img src='media/images/other-trades.svg' alt='' width={'60%'} />
            <p style={{ fontSize: '10px' }}> Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
