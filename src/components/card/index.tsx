import React from 'react';
import './card.css';
import PlusIcon from '../../img/plus-icon.png';
import DotsIcon from '../../img/3-dots-icon.png';
import LongDescriptionIcon from '../../img/long-description-icon.png';
import TaskImage from '../../img/task-image.jpg';

function Card() {
  return (
    <div className='card-wrapper'>
      <div className='title-deploy-container'>
        <h1 className='card-title'>Card title</h1>
        <img
          src={DotsIcon}
          alt='Deploy cards button'
          className='deploy-button'
        />
      </div>
      <div className='cards-container'>
        <div className='card-container'>
          <div className='task-container'>
            <div className='clasification-container'>
              <h2>Importante</h2>
              <h2>Bug</h2>
            </div>
            <p className='task-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              nobis obcaecati enim hic repellat nam iure assumenda distinctio
              iusto voluptatibus, excepturi aut eaque, ratione quod? Quo
              reprehenderit explicabo quam consequuntur!
            </p>
            <div className='long-description-assigned-container'>
              <img
                src={LongDescriptionIcon}
                alt='Long description button'
                className='long-description-icon'
              />
              <img
                src='https://dummyimage.com/30x30/ceaced/ceaced.jpg'
                alt='Assigned person'
                className='assigned-photo'
              />
            </div>
          </div>
        </div>
        <div className='card-container'>
          <div className='task-container'>
            <div className='clasification-container'>
              <h2>Bug</h2>
            </div>
            <p className='task-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='long-description-assigned-container'>
              <img
                src='https://dummyimage.com/20x20/ceaced/ceaced.jpg'
                alt='Long description button'
              />
              <img
                src='https://dummyimage.com/30x30/ceaced/ceaced.jpg'
                alt='Assigned person'
                className='assigned-photo'
              />
            </div>
          </div>
        </div>
        <div className='card-container'>
          <div className='task-container'>
            <img
              src={TaskImage}
              alt='Long description button'
              className='task-image'
            />
            <div className='long-description-assigned-container'>
              <img
                src='https://dummyimage.com/20x20/ceaced/ceaced.jpg'
                alt='Long description button'
              />
              <img
                src='https://dummyimage.com/30x30/ceaced/ceaced.jpg'
                alt='Assigned person'
                className='assigned-photo'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='add-a-card-wrapper'>
      <div className='add-a-card-container'>
        <img
          src={PlusIcon}
          alt='Add a card button'
          className='plus-icon'
        />
        <button className='add-a-card-button'>Add a card</button>
      </div>
      </div>
    </div>
  );
}

export default Card;

