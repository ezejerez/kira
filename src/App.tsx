import React from 'react';
import './App.css';
import MainNavbar from './components/main-navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecentlyIcon from './img/recently-icon.png'

function App() {
  return (
    <Router>
      <>
      <MainNavbar />
      <div className='content-wrapper'>
        <div className='boards-section-container'> 
          <div className='title-container'>
            <img
            src={RecentlyIcon}
            alt='RecentlyIcon'
            className='title-icon'
            />       
            <h1 className='title'>Recently viewed</h1>
          </div>

          <div className='mini-boards-wrapper'>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
          </div>
        </div>

         <div className='boards-section-container'> 
          <div className='title-container'>    
            <h1 className='title'>Your boards</h1>
          </div>

          <div className='mini-boards-wrapper'>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
          </div>
        </div>

        <div className='boards-section-container'>  
          <div className='title-container'>    
            <h1 className='title'>Guest boards</h1>
          </div>
          <div className='mini-boards-wrapper'>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
            <div className='mini-board'>
              <h1 className='mini-board-title'>Board title</h1>
            </div>
          </div>
        </div> 
      </div>
      </>
    </Router>
  );
}

export default App;
