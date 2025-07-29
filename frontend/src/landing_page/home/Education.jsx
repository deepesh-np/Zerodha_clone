/** @format */

import React from 'react';
function Education() {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-6'>
          <img src='/media/images/education.svg' alt='' style={{width:"70%"}} />
        </div>
        <div className='col-6'>
          <h1 className='mb-3'  style={{fontSize:'2.1rem'}}>Free and Open market education</h1>
          <p className='mt-5'> 
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href=''>
            Versity <i className='fa-solid fa-arrow-right'></i>
          </a>
          <p className='mt-5'>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href=''>
            TradingQ&A <i className='fa-solid fa-arrow-right'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
