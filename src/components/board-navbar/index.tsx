import React from 'react';
import '../board-navbar/board-navbar.css';
import NotificationsIcon from '../../img/notifications-icon.png'
import PlusIcon from '../../img/plus-icon.png'
import ProfilePhoto from "../../img/profile-photo.jpg"

function BoardNavbar() {
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
          <img
            src={PlusIcon}
            alt='Add a card icon'
            className='item-2' 
          />
      </div>
    </>
  );
}

export default BoardNavbar;
