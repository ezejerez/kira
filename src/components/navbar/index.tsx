import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <>
      <div className='navbar-wrapper'>
        <div className='section-container'>
          <img
            src='https://dummyimage.com/36x36/ceaced/ceaced.jpg'
            alt='Profile'
            className='profile-photo'
          />
          <button className='item' />
        </div>
        <button className='item' />
      </div>
    </>
  );
}

export default Navbar;
