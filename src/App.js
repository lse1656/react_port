import React from 'react';
import { Link, Route, Routes, Switch } from 'react-router-dom';
import Header from './components/layouts/Header';
import Main from './pages/Main';
import Skill from './pages/Skill';
import './App.css';

function App() {
  return (
    <div className='wrap'>
      <Header />
      <Route exact path="/" component={ Main } />
      <Route path="/skill" component={ Skill } />
    </div>
  );
}

export default App;
