'use strict';
/**
 * Redux
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Iterable } from 'immutable';

/**
* ## Reducers
* The reducer contains all the reducers from the app
*/
import Reducers from './reducers';

const middlewares = [thunk];

//Middleware for logging the state into the console
if (process.env.NODE_ENV != 'production') {
  const createLogger = require('redux-logger');
  const stateTransformer = (state) => {
    return Iterable.isIterable(state) ?
      state.toJS():
      state;
  };
  const logger = createLogger({diff:true, stateTransformer});
  middlewares.push(logger);
}

/**
 * ## creatStoreWithMiddleware
 * Like the name...
 */
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

/**
 * ## configureStore
 *
 */
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(Reducers, initialState);
  /* Hawt reloadin'*/
  if(module.hot){
    module.hot.accept(Reducers, () => {
     store.replaceReducer(Reducers);
   });
  }
  return store
}
