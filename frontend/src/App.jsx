/** @format */

import React from 'react';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Pricing from './landing_page/pricing/PricingPage';
import Product from './landing_page/products/ProductPage';
import About from './landing_page/about/AboutPage';
import Support from './landing_page/support/SupportPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/landing_page/Navbar';
import Footer from '../src/landing_page/Footer';
import NotFound from './landing_page/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/support' element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
