import React from 'react';
import './board-view.css';
import Card from '../../components/card';
import Collaborators from '../../components/collaborators';
import BoardNavbar from '../../components/board-navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BoardView() {
  return (
    <Router>
      <>
      <BoardNavbar />
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
    </Router>
  );
}

export default BoardView;