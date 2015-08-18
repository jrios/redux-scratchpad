'use strict';

import React from 'react';
import { Provider } from 'react-redux';

import { App } from './components';

import { configureStore } from './store/configureStore';

let organizations = [
      {
        id: 1,
        name: 'Towers Watson',
        url: 'http://towerswatson.com'        
      },
      {
        id: 2,
        name: 'Github',
        url: 'http://github.com'
      },
      {
        id: 3,
        name: 'Facebook',
        url: 'http://facebook.com'
      }
    ];

let store = configureStore(organizations);
let mountNode = document.getElementById('root');

React.render(
  <Provider store={store}>
      {() => <App />}
  </Provider>,
  mountNode);