import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const TestPage = () => (
  <div> 
     <h1>TEST</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/test' component={TestPage}/>
      </Switch>
    </div>
  );
}

export default App;
