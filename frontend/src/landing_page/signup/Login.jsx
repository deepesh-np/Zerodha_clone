/** @format */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: 'bottom-left' });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: 'bottom-right' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        'http://localhost:3002/login',
        inputValue,
        { withCredentials: true }
      );
      if (data.success) {
          handleSuccess(data.message);
        // OR if you want to redirect to another port:
        window.location.href = 'http://localhost:5174/';
      } else {
        handleError(data.message);
      }
    } catch (error) {
      handleError(
        error.response?.data?.message || 'Server error. Please try again.'
      );
    } finally {
      setLoading(false);
      setInputValue({ email: '', password: '' });
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div
        className='card shadow-lg p-4'
        style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className='text-center mb-4'>Login to Your Account</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              className='form-control'
              id='email'
              value={email}
              onChange={handleOnChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              className='form-control'
              id='password'
              value={password}
              onChange={handleOnChange}
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            type='submit'
            className='btn btn-success w-100'
            disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className='text-center mt-3'>
            Don’t have an account?{' '}
            <Link to='/signup' className='text-decoration-none'>
              Signup
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
