import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
//import './index.css'; //used for storybook
import './style.css'; // for actual site
import App from './App';
import * as serviceWorker from './serviceWorker';

// initialize store
(function() {

  const list = [
    'beef-roast-stew.json',
    'cabbage-stir-fry.json',
    'napa-cabbage-meatball.json',
    'salmon-salad.json',
    'beef-stew.json',
    'garlic-chicken.json',
    'spinach-egg.json'
  ];

  list.forEach(item => {
    const data = require('./data/' + item);
    store.dispatch({
      type: 'ADD_RECIPE',
      payload: data,
    });
  });

})();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
