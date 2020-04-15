import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';
import HomePage from './HomePage';
import RecipePage from './RecipePage';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Switch>
            <Route exact path='/' component={ HomePage }/>
            <Route path='/recipe/:id' component={ RecipePage }/>
            <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
