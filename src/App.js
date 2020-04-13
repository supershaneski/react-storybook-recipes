import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';
import Home from './Home';
import RecipePage from './RecipePage';

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/recipe/:id' component={ RecipePage }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/

export default App;
