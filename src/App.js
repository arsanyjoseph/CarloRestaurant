
import React from 'react';
import Header from './components/js/header';
import SwipeableTemporaryDrawer from './components/js/navBar'
import './App.css';
import MainBody from './components/js/mainBody';

function App() {
  return (
    <div className="App">
      <Header/>
      <SwipeableTemporaryDrawer/>
      <MainBody/>
    </div>
  );
}

export default App;
