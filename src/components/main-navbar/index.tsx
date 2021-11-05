import React from 'react';
import './main-navbar.css';
import NotificationsIcon from '../../img/notifications-icon.png'
import ProfilePhoto from "../../img/profile-photo.jpg"
import Searchbar from '../searchbar';

function MainNavbar() {
  return (
    <>
      <div className='navbar-wrapper'>
        <div className='section-container'>
          <img
            src={ProfilePhoto}
            alt='Profile'
            className='profile-photo'
          />
          <img      
            src={NotificationsIcon}
            alt='Notifications icon'
            className='item' 
          />
        </div>
        <div className='section-container'>         
          <Searchbar />
        </div>
      </div>
    </>
  );
}

export default MainNavbar;