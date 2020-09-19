import React from 'react';

//components
import Navbar from './components/Navbar.js';
import HomeContainer from './components/Home.js';

import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
}

export default App;
