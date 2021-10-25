import React from 'react';
import './App.css';
import Card from './components/card';
import Collaborators from './components/collaborators';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='content-wrapper'>
        <h1 className='board-title'>Board title</h1>
        <Collaborators />
        <div className='main-cards-container'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
