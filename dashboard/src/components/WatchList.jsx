/** @format */

import React, { use, useState } from 'react';

import { Tooltip, Grow } from '@mui/material';
import { watchlist } from '../data/data';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const WatchList = () => {
  return (
    <div className='watchlist-container'>
      <div className='search-container'>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search eg:infy, bse, nifty fut weekly, gold mcx'
          className='search'
        />
        <span className='counts'> {watchlist.length} / 50</span>
      </div>

      <ul className='list'>
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setshowWAtchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setshowWAtchlistActions(true);
  };

  const handleMouseExit = (e) => {
    setshowWAtchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter}>
      <div className='item'>
        <p className={stock.isDown ? 'down' : 'up'}> {stock.name} </p>
        <div className='itemInfo'>
          <span className='percent'> {stock.percent} </span>
          {stock.isDown ? (
            <KeyboardArrowDown className='down' />
          ) : (
            <KeyboardArrowUp className='up' />
          )}
          <span className='price'> {stock.price} </span>
        </div>
      </div>
    </li>
  );
};

const WatchListActions = ({ uid }) => {};
