/** @format */

import React from 'react';
function Awards() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 p-7'>
          <img src='media/images/largestBroker.svg' alt='' />
        </div>
        <div className='col-lg-6 col-md-12 p-7 mt-3'>
          <h3>Aiming to be one of the Largest Stock Broker in India</h3>
          <p className='mb-5'>
            Active Client can contribute to volumes of India daily by trading
            and investing in:
          </p>
          <div className='row mt-3'>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Stock & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Gov. security</p>
                </li>
              </ul>
            </div>
            <img
              src='/media/images/pressLogos.png'
              alt=''
              style={{ width: '90%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
