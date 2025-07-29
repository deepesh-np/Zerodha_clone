/** @format */

import React from 'react';
function Hero() {
  return (
    <div className='container p-5 offset'>
      <div className='row text-center'>
        <img
          src='media/images/homeHero.png'
          alt='Hero Images'
          className='mb-5'
        />
        <h1 className='mt-5'>Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <br />
        <br />
        <button
          style={{ width: '20%', margin: '0 auto', backgroundColor: '#387ED1', color:"#FFFFFF" }}
          className='p-2.75 btn fs-10'>
          Signup up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
