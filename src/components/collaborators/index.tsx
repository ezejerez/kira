import React from 'react';
import './collaborators.css';

function Collaborators() {
  return (
    <div className='collaborators-wrapper'>
      <div className='collaborators-container'>
        <img
          src='https://dummyimage.com/30x30/ceaced/ceaced.jpg'
          alt='Assigned person'
          className='collaborator'
        />
        <img
          src='https://dummyimage.com/30x30/ceaced/ceaced.jpg'
          alt='Assigned person'
          className='collaborator'
        />
        <img
          src='https://dummyimage.com/30x30/ceaced/ceaced.jpg'
          alt='Assigned person'
          className='collaborator'
        />
        <img
          src='https://dummyimage.com/30x30/ceaced/ceaced.jpg'
          alt='Assigned person'
          className='collaborator'
        />
      </div>
      <button className='invite-button'>Invite</button>
    </div>
  );
}

export default Collaborators;
