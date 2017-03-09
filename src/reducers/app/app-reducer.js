/**
 *
 * The reducer for all the actions regarding login and signup.
 */
'use strict';

import InitialState from './app-initial-state';
const initialState = new InitialState;
const authReducer = (state = initialState, action) => {

  switch (action.type) {

    /*
    * MANAGE ACTIONS
    */
    case 'LOGIN_REQUEST':
      return state.set('isFetching', true);

    case 'LOGIN_SUCCESS':
      return state.set('isFetching', false);

    case 'LOGIN_FAILURE':
      return state.set('isFetching', false);

    default:
      return state
  }
}

export default authReducer
