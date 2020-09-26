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
        <Route
          exact
          path="/"
          // component={Home}
          // children={console.log('testando children')}
          render={(props) => (
            <Home {...props} title={'testando render props caralho'} />
          )}
        />
        <Route path="/Details" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
