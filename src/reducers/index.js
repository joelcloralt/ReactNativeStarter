import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app/app-reducer.js';

const appReducer = combineReducers({
  app,
  routing: routerReducer
});

const Reducers = (state, action) => {
  // If there is an action dispatched to logout, reset the state.
  // if (action.type == 'LOGOUT_SUCCESS') {
  //   state = undefined;
  // }
  return appReducer(state, action);
}

export default Reducers;
