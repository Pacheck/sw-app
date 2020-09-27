import React from 'react';

//components
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Details from './components/Details.js';

import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Details" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
