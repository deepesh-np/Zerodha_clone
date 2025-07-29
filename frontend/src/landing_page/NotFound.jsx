/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}>
      <h1>404 Not Found</h1>
      <p>
        <strong>The Page you are looking for does not exists!</strong>
      </p>

      <Link className='nav-link active' aria-current='page' to='/'>
        <button className='btn btn-dark'>
          Go to Home <i className='fa-solid fa-arrow-right'></i>
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
