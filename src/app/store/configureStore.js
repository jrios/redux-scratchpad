'use strict';

import { createStore } from 'redux';
import { organizationsReducer } from '../reducers';

export function configureStore(initialState) {
  return createStore(organizationsReducer, initialState);
}