/** @format */

import React from 'react';

function Universe() {
  return (
    <div className='container mt-5 universe-logo'>
      <div className='row text-center'>
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className='col-4 p-3 mt-5 universe-logo'>
          <img
            src='/media/images/zerodhaFundhouse.png'
            style={{ width: '50%' }}
          />
          <p className='text-small text-muted'>
            {' '}
            <br />
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img src='media/images/sensibullLogo.svg' style={{ width: '70%' }} />
          <p className='text-small text-muted'>
            <br />
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className='col-4 p-3 mt-5 universe-logo'>
          <img src='media/images/tijori.svg' style={{ width: '50%' }} />
          <p className='text-small text-muted'>
            {/* <br /> */}
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className='col-4 p-3 mt-5 universe-logo'>
          <img src='/media/images/streakLogo.png' style={{ width: '50%' }} />
          <p className='text-small text-muted'>
            {' '}
            <br />
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className='col-4 p-3 mt-5 universe-logo'>
          <img src='media/images/smallcaseLogo.png' />
          <p className='text-small text-muted'>
            {' '}
            <br /> Thematic investment platform that helps you to invest in
            diversified baskets on stocks on ETFs
          </p>
        </div>
        <div className='col-4 p-3 mt-5 universe-logo'>
          <img src='media/images/dittoLogo.png' style={{ width: '40%' }} />
          <p className='text-small text-muted'>
            <br />
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className='p-2 btn btn-primary fs-5 universe-logo mb-5 universe-logo'
          style={{ width: '20%', margin: '0 auto' }}>
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
