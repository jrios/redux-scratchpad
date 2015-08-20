'use strict';

import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';

import App from './components';

import { configureStore } from './store/configureStore';

let organizations = [
      {
        id: 1,
        name: 'Twitter',
        url: 'http://twitter.com'        
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

let members = [];

let initialState = {
  organizations: organizations,
  members: members
};

let store = configureStore(initialState);
let mountNode = document.getElementById('root');

React.render(
  <Provider store={store}>
      {() => <App />}
  </Provider>,
  mountNode);