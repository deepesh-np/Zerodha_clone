/** @format */

import React from 'react';
function Stats() {
  return (
    <div className='container'>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h2 className='mb-5' style={{ fontSize: '1.5rem' }}>Trust with confidence</h2>
          <h3 className='' style={{ fontSize: '1.25rem' }}>
            Customer-first always
          </h3>
          <p className='text-muted'>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3 style={{ fontSize: '1.25rem' }}>No spam or gimmicks</h3>
          <p className='text-muted'>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h3 style={{ fontSize: '1.25rem' }}>The Zerodha universe</h3>
          <p className='text-muted'>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 style={{ fontSize: '1.25rem' }}>Do better with money</h3>
          <p className='text-muted'>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className='col-6 p-5'>
          <img
            src='\media\images\ecosystem.png'
            alt=''
            style={{ width: '140%' }}
          />
          <div className='text-center'>
            <a className='mx-5' href=''>
              Explore our products
              <i className='fa-solid fa-arrow-right'></i>
            </a>
            <a className='' href=''>
              Try Kite <i className='fa-solid fa-arrow-right'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
